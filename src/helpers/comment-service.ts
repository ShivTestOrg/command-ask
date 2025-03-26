import { Context } from "../types";
import { CallbackResult } from "../types/proxy";
import { CallbackUrlHandler } from "./callback-url";

export class CommentService {
  private _context: Context;
  private _callbackHandler?: CallbackUrlHandler;
  private _isCallbackMode: boolean;

  constructor(context: Context) {
    this._context = context;
    this._isCallbackMode = this._isCallbackUrlConfigured();

    if (this._isCallbackMode) {
      try {
        this._callbackHandler = new CallbackUrlHandler(context);
      } catch (error) {
        // If callback handler creation fails, fall back to regular mode
        this._isCallbackMode = false;
        this.handleError(`Failed to initialize callback handler, falling back to regular mode ${error}`).catch(() => {
          // If error handling fails, log to console
          console.error("Failed to initialize callback handler, falling back to regular mode", error);
        });
      }
    }
  }

  /**
   * Posts initial comment content
   */
  async postInitialComment(content: string, metadata?: Record<string, unknown>): Promise<void> {
    try {
      if (this._isCallbackMode && this._callbackHandler) {
        await this._callbackHandler.postInitialMessage(content);
      } else {
        await this._context.commentHandler.postComment(this._context, this._context.logger.ok(content, metadata), { updateComment: true });
      }
    } catch (error) {
      this.handleError(`Error posting initial comment: ${error}`).catch(() => {
        // If error handling fails, log to console
        console.error("Error posting initial comment: ", error);
      });
    }
  }

  /**
   * Updates existing comment with new content
   */
  async updateComment(content: string, tokenUsage?: { input: number; output: number; total: number }, groundTruths?: string[]): Promise<void> {
    try {
      if (this._isCallbackMode && this._callbackHandler) {
        await this._callbackHandler.updateMessage(content, tokenUsage, groundTruths);
      } else {
        await this._context.commentHandler.postComment(
          this._context,
          this._context.logger.ok(content, {
            groundTruths,
            tokenUsage,
          }),
          { raw: true, updateComment: true }
        );
      }
    } catch (error) {
      this.handleError(`Error updating comment: ${error}`).catch(() => {
        // If error handling fails, log to console
        console.error("Error updating comment:", error);
      });
    }
  }

  /**
   * Handles errors based on the current mode
   */
  public async handleError(error: string | Error, metadata?: Record<string, unknown>): Promise<CallbackResult> {
    const errorMessage = error instanceof Error ? error.message : error;
    this._context.logger.info("System message: " + errorMessage, metadata);
    if (this._isCallbackMode && this._callbackHandler) {
      // In callback mode, log to console
      this._context.logger.info(errorMessage, metadata);
      // Find the UUID from the callback url handler
      // TODO: this should not be called here, could lead to infinite loop
      await this.updateComment(errorMessage);
      return { status: 200, reason: this._context.logger.warn(`Error: ${errorMessage} forwaded to callback url.`, metadata).logMessage.raw };
    } else {
      // In regular mode, use context logger
      throw this._context.logger.error(errorMessage, metadata);
    }
  }

  /**
   * Checks if callback URL is configured in the context
   */
  private _isCallbackUrlConfigured(): boolean {
    const ctx = this._context.payload;
    //@ts-expect-error - headerAuth is not defined in the plugin-sdk
    return ctx.source === "header" && ctx.headerAuth?.callbackUrl;
  }
}
