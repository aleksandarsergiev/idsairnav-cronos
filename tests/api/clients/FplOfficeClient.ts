import { APIRequestContext, APIResponse } from '@playwright/test';

export class FplOfficeClient {
  constructor(private request: APIRequestContext) {}

  async create(body: unknown): Promise<APIResponse> {
    return this.request.post(`${process.env.API_BASE_URL}/fploffices/`, {
      data: body,
    });
  }

  async delete(id: string): Promise<APIResponse> {
    return this.request.delete(`${process.env.API_BASE_URL}/fploffices/${encodeURIComponent(id)}`);
  }
}
