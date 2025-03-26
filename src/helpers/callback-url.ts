import { Context } from "../types";

export interface CallbackResponse {
  operation: "create" | "update";
  content: string;
  uuid?: string;
  metadata?: Record<string, unknown>;
  tokenUsage?: {
    input: number;
    output: number;
    total: number;
  };
  groundTruths?: string[];
}

export class CallbackUrlHandler {
  private _context: Context;
  private _uuid?: string = crypto.randomUUID();

  constructor(context: Context) {
    // Type assertion used to handle headerAuth case without TypeScript errors
    const ctx = context.payload;
    //@ts-expect-error - headerAuth is not defined in the plugin-sdk
    if (ctx.source !== "header" || !ctx.headerAuth?.callbackUrl) {
      throw new Error("Callback URL not configured or auth type is not header");
    }
    this._context = context;
  }

  async postInitialMessage(content: string, metadata?: Record<string, unknown>): Promise<void> {
    await this._sendToCallbackUrl({
      operation: "create",
      content,
      uuid: this._uuid,
      ...(metadata && { metadata }),
    });
  }

  async updateMessage(content: string, tokenUsage?: { input: number; output: number; total: number }, groundTruths?: string[], uuid?: string): Promise<void> {
    if (!this._uuid && !uuid) {
      throw new Error("No initial message UUID found. Call postInitialMessage first.");
    }

    await this._sendToCallbackUrl({
      operation: "update",
      content,
      uuid: this._uuid || uuid,
      ...(tokenUsage && { tokenUsage }),
      ...(groundTruths && { groundTruths }),
    });
  }

  private async _sendToCallbackUrl(payload: CallbackResponse): Promise<void> {
    const ctx = this._context.payload;
    try {
      //@ts-expect-error - headerAuth is not defined in the plugin-sdk
      const response = await fetch(ctx.headerAuth.callbackUrl, {
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
      throw new Error(`Error sending to callback URL: ${error}`);
    }
  }
}
