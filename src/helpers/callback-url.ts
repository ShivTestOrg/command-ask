import { Context } from "../types";

export interface CallbackResponse {
  operation: "create" | "update";
  content: string;
  uuid?: string;
  tokenUsage?: {
    input: number;
    output: number;
    total: number;
  };
  groundTruths?: string[];
}

export class CallbackUrlHandler {
  private _context: Context;
  private _uuid?: string;

  constructor(context: Context) {
    // Type assertion used to handle headerAuth case without TypeScript errors
    const ctx = context;
    //@ts-expect-error - authType is not defined in the plugin-sdk
    if (ctx.authType !== "header" || !ctx.callbackUrl) {
      throw context.logger.error("Callback URL not configured or auth type is not header");
    }
    this._context = context;
  }

  async postInitialMessage(content: string): Promise<void> {
    this._uuid = crypto.randomUUID();
    await this._sendToCallbackUrl({
      operation: "create",
      content,
      uuid: this._uuid,
    });
  }

  async updateMessage(content: string, tokenUsage?: { input: number; output: number; total: number }, groundTruths?: string[]): Promise<void> {
    if (!this._uuid) {
      throw this._context.logger.error("No initial message UUID found. Call postInitialMessage first.");
    }

    await this._sendToCallbackUrl({
      operation: "update",
      content,
      uuid: this._uuid,
      ...(tokenUsage && { tokenUsage }),
      ...(groundTruths && { groundTruths }),
    });
  }

  private async _sendToCallbackUrl(payload: CallbackResponse): Promise<void> {
    const ctx = this._context;
    try {
      //@ts-expect-error - authType is not defined in the plugin-sdk
      const response = await fetch(ctx.callbackUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to send to callback URL: ${response.statusText}`);
      }
    } catch (error) {
      throw this._context.logger.error(`Error sending to callback URL: ${error}`);
    }
  }
}
