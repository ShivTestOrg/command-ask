import { Context } from "../types";
import { ParsedDriveLink } from "../types/google";
import { GoogleDriveClient } from "../adapters/google/helpers/google-drive";
import { GoogleDocPage, GoogleSheet, GoogleSlide } from "../types/google";
import ms from "ms";

const POLL_INTERVAL = 25000; // 25 seconds
const MAX_POLL_TIME = 900000; // 15 minutes

interface DriveLink {
  url: string;
  data?: ParsedDriveLink;
  requiresPermission: boolean;
}

/**
 * Check for Drive links and their accessibility
 */
export async function checkDriveLinks(context: Context, question: string): Promise<DriveLink[]> {
  const { google } = context.adapters;
  if (!google) {
    context.logger.info("Skipping Drive link processing");
    return [];
  }

  const driveUrlPattern = /https:\/\/(docs|drive|sheets|slides)\.google\.com\/[^\s"<>)}\]]+(?=[\s"<>)}\]]|$)/g;
  const matches = [...question.matchAll(driveUrlPattern)];

  if (matches.length === 0) {
    context.logger.info("No Drive links found in regex search");
    return [];
  }

  context.logger.info(`Found ${matches.length} potential Drive links: ${matches.map((m) => m[0]).join(", ")}`);

  const processedUrls = new Set<string>();
  const driveLinks: DriveLink[] = [];

  for (const match of matches) {
    const url = match[0];
    if (processedUrls.has(url)) {
      continue;
    }
    processedUrls.add(url);

    try {
      const parsedLink = await google.drive.parseDriveLink(url);
      if (!parsedLink.isAccessible) {
        driveLinks.push({
          url,
          data: parsedLink,
          requiresPermission: true,
        });
      } else {
        driveLinks.push({
          url,
          requiresPermission: false,
        });
      }
    } catch (error) {
      context.logger.error(`Error processing Drive link ${url}: ${error}`);
      continue;
    }
  }

  context.logger.info(`Processed ${driveLinks.length} valid Drive links`);
  return driveLinks;
}

/**
 * Check for access to Drive files
 */
export async function checkAccessStatus(drive: GoogleDriveClient, links: DriveLink[]): Promise<{ updated: DriveLink[] | undefined; hasPermission: boolean }> {
  const linksNeedingPermission = links.filter((link) => link.requiresPermission);

  if (linksNeedingPermission.length === 0) {
    return { updated: undefined, hasPermission: true };
  }

  let hasFullAccess = true;
  const updated: DriveLink[] = [];
  for (const link of linksNeedingPermission) {
    try {
      const result = await drive.parseDriveLink(link.url);
      if (!result.isAccessible || !result.content) {
        hasFullAccess = false;
        break;
      }
      // Store the parsed result data and update permission status
      updated.push({
        ...link,
        requiresPermission: false,
        data: result,
      });
    } catch {
      hasFullAccess = false;
      break;
    }
  }

  return { updated: updated.length > 0 ? updated : undefined, hasPermission: hasFullAccess };
}

/**
 * Format access request message
 */
export function formatAccessRequestMessage(context: Context, links: DriveLink[]): string | undefined {
  const linksNeedingPermission = links.filter((link) => link.requiresPermission);

  if (linksNeedingPermission.length === 0) {
    return;
  }

  if (!context.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    return "I need access to continue, but the Google Service Account key is missing from the environment.";
  }

  const fileList = linksNeedingPermission.map((link) => `- ${link.url}`).join("\n");
  const serviceAccountEmail = JSON.parse(context.env.GOOGLE_SERVICE_ACCOUNT_KEY).client_email;

  return `I need access to continue. Please share these files with ${serviceAccountEmail}:\n\n${fileList}\n\nI'll wait up to ${ms(MAX_POLL_TIME, { long: true })} for access to be granted.`;
}

/**
 * Parse Google Doc content
 */
function parseDocContent(pages: GoogleDocPage[]): string {
  return pages
    .map((page) => {
      const pageContent = `Page ${page.pageNumber}:\n${page.content || ""}`;
      if (!page.tables?.length) return pageContent;

      const tableContent = "\n\nTables:\n" + page.tables.map((table) => table.data.map((row) => row.join("\t")).join("\n")).join("\n\n");
      return pageContent + tableContent;
    })
    .join("\n\n");
}

/**
 * Parse Google Sheet content
 */
function parseSheetContent(sheets: GoogleSheet[]): string {
  return sheets.map((sheet) => `Sheet "${sheet.name}":\n${sheet.data.map((row) => row.join("\t")).join("\n")}`).join("\n\n");
}

/**
 * Parse Google Slides content
 */
function parseSlidesContent(slides: GoogleSlide[]): string {
  return slides
    .map((slide) => {
      const titleText = slide.title ? ` - ${slide.title}` : "";
      return `Slide ${slide.slideNumber}${titleText}:\n${slide.textContent || ""}`;
    })
    .join("\n\n");
}

/**
 * Parse content based on its type
 */
function parseContent(driveContent: ParsedDriveLink): string | undefined {
  if (!driveContent.content) return;

  // Handle base64 content
  if (driveContent.isBase64 && driveContent.metadata.name) {
    if (driveContent.fileType === "image") {
      return driveContent.content as string;
    }
    const contentStr = driveContent.content as string;
    const FILE_SIZE_KB = Math.round((contentStr.length * 3) / 4 / 1024);
    return `File "${driveContent.metadata.name}" (${driveContent.fileType}, ${FILE_SIZE_KB}KB)`;
  }

  // Handle structured content
  if (driveContent.isStructured && typeof driveContent.content === "object") {
    const structuredContent = driveContent.content;
    if ("pages" in structuredContent && structuredContent.pages) {
      return parseDocContent(structuredContent.pages);
    }
    if ("sheets" in structuredContent && structuredContent.sheets) {
      return parseSheetContent(structuredContent.sheets);
    }
    if ("slides" in structuredContent && structuredContent.slides) {
      return parseSlidesContent(structuredContent.slides);
    }
  }

  // Handle plain text content
  if (typeof driveContent.content === "string") {
    return driveContent.content;
  }
}

/**
 * Get content from Drive files once access is granted
 */
export async function getDriveContents(context: Context, links: DriveLink[]): Promise<{ driveContents: Array<{ name: string; content: string }> }> {
  const { google } = context.adapters;
  if (!google) {
    context.logger.info("Google adapter not found.");
    return { driveContents: [] };
  }

  const driveContents: Array<{ name: string; content: string }> = [];
  context.logger.info(`Fetching content for ${links.length} Drive files`);

  for (const link of links) {
    context.logger.debug(`Fetching content for ${link.url}`);
    try {
      const parsedDriveContent = link.data || (await google.drive.parseDriveLink(link.url));
      if (!parsedDriveContent.isAccessible || !parsedDriveContent.content) continue;

      const content = parseContent(parsedDriveContent);
      context.logger.debug(`Content for ${link.url}: ${content}`);
      if (!content) continue;

      const documentId = link.url.match(/\/d\/([^/]+)/)?.[1];
      const name = documentId ? `document-${documentId}` : link.url;
      driveContents.push({
        name,
        content: `Content of "${parsedDriveContent.metadata.name || name}":\n${content}`,
      });
    } catch (error) {
      context.logger.error(`Failed to fetch content for ${link.url}: ${error}`);
      continue;
    }
  }
  return { driveContents };
}

/**
 * Handle Drive permission flow
 */
export async function handleDrivePermissions(
  context: Context,
  question: string
): Promise<{ hasPermission: boolean; message?: string; driveContents?: Array<{ name: string; content: string }> } | undefined> {
  context.logger.info("Checking for Drive links in the question");

  // Check if Drive link processing is enabled in settings
  if (context.config.processDriveLinks === false) {
    context.logger.info("Drive link processing is disabled in settings");
    return;
  }

  const { google } = context.adapters;
  if (!google) {
    context.logger.info("Google adapter not found, skipping Drive link processing");
    return;
  }

  // Check for Drive links
  let driveLinks = await checkDriveLinks(context, question);
  context.logger.info(`Found ${driveLinks.length} Drive links`);

  if (driveLinks.length === 0) {
    context.logger.info("No Drive links found, returning hasPermission: true");
    return { hasPermission: true };
  }

  // If any links need permission, start polling flow
  const accessMessage = formatAccessRequestMessage(context, driveLinks);
  context.logger.info(`Access message: ${accessMessage}`);

  if (accessMessage) {
    context.logger.info("Some links require permission, starting polling flow");
    // Post access request message
    await context.commentHandler.postComment(
      context,
      context.logger.ok(`${accessMessage}\n\nPlease grant access to the Google Drive files. I'll check again in ${POLL_INTERVAL / 1000} seconds.`),
      { updateComment: true }
    );
    const startTime = Date.now();
    let hasAccess = false;

    while (Date.now() - startTime < MAX_POLL_TIME) {
      const status = await checkAccessStatus(google.drive, driveLinks);
      if (status.updated) {
        // Replace old links with updated ones, keep others unchanged
        driveLinks = driveLinks.map((link) => {
          const updatedLink = status.updated?.find((u) => u.url === link.url);
          return updatedLink || link;
        });
      }
      if (status.hasPermission) {
        hasAccess = true;
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));
    }

    if (!hasAccess) {
      context.logger.warn("Access not granted within time limit");
      await context.commentHandler.postComment(
        context,
        context.logger.ok(`Access was not granted within the ${MAX_POLL_TIME / 60000} minute time limit. Please try again.`),
        { updateComment: true }
      );
      return { hasPermission: false, message: "Access not granted within time limit." };
    }

    context.logger.info("Access granted to all Google Drive files");
    // Post access granted message
    await context.commentHandler.postComment(context, context.logger.ok("Access granted to all Google Drive files. Proceeding with the request."), {
      updateComment: true,
    });
  }

  context.logger.info("Fetching contents of accessible Drive files");
  // All files are now accessible, get their contents
  const { driveContents } = await getDriveContents(context, driveLinks);
  context.logger.info(`Returning hasPermission: true, driveContents count: ${driveContents.length}`);
  return {
    hasPermission: true,
    driveContents: driveContents.length > 0 ? driveContents : undefined,
  };
}
