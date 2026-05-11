import { APIRequestContext, APIResponse } from '@playwright/test';

export class LayoutClient {
  constructor(private request: APIRequestContext) {}

  async getSidebar(): Promise<APIResponse> {
    return this.request.get(`${process.env.API_BASE_URL}/layout/sidebar`);
  }
}
