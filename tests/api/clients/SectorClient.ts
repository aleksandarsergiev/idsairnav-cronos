import { APIRequestContext, APIResponse } from '@playwright/test';

export class SectorClient {
  constructor(private request: APIRequestContext) {}

  async create(body: unknown): Promise<APIResponse> {
    return this.request.post(`${process.env.API_BASE_URL}/admp/sector/`, {
      data: body,
    });
  }

  async delete(id: number): Promise<APIResponse> {
    return this.request.delete(`${process.env.API_BASE_URL}/admp/sector/${id}`);
  }
}
