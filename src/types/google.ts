export type DriveFileType =
  | "document"
  | "spreadsheet"
  | "presentation"
  | "pdf"
  | "image"
  | "msword"
  | "excel"
  | "powerpoint"
  | "odt"
  | "odp"
  | "ods"
  | "unknown";

export interface DriveFileMetadata {
  id: string;
  name?: string;
  mimeType?: string;
  createdTime?: string;
  modifiedTime?: string;
  owners?: Array<{
    displayName?: string;
    emailAddress?: string;
  }>;
  lastModifyingUser?: {
    displayName?: string;
    emailAddress?: string;
  };
  webViewLink?: string;
  thumbnailLink?: string;
  accessMessage?: string;
}

export interface ParsedOfficeContent {
  sheets?: Array<{
    name?: string;
    data: string[][];
  }>;
  slides?: Array<{
    title?: string;
    content?: string;
  }>;
  content?: string;
}

export interface GoogleDocPage {
  pageNumber: number;
  content: string;
  tables?: Array<{
    data: string[][];
  }>;
}

export interface GoogleSheet {
  name: string;
  data: string[][];
}

export interface GoogleSlide {
  slideNumber: number;
  title?: string;
  textContent?: string;
}

export interface DocumentContent {
  pages?: GoogleDocPage[];
  sheets?: GoogleSheet[];
  slides?: GoogleSlide[];
  image?: Array<{
    title?: string;
    content: string;
  }>;
  rawContent?: string;
}

export interface ParsedDriveLink {
  fileId: string;
  fileType: DriveFileType;
  isAccessible: boolean;
  metadata: DriveFileMetadata;
  content?: string | DocumentContent;
  contentType?: string;
  isBase64?: boolean;
  isStructured?: boolean;
  rawSize?: number;
}

export interface DriveDocumentContent extends DocumentContent {
  pages: GoogleDocPage[];
}

export interface DriveSheetContent extends DocumentContent {
  sheets: GoogleSheet[];
}

export interface DriveSlideContent extends DocumentContent {
  slides: GoogleSlide[];
}

export interface DriveImageContent extends DocumentContent {
  image: Array<{
    title?: string;
    content: string;
  }>;
}
