import { APIRequestContext, APIResponse } from '@playwright/test';

export class UserClient {
  constructor(private request: APIRequestContext) {}

  async create(body: unknown): Promise<APIResponse> {
    return this.request.post(`${process.env.API_BASE_URL}/users/`, {
      data: body,
    });
  }

  async delete(id: number): Promise<APIResponse> {
    return this.request.delete(`${process.env.API_BASE_URL}/users/${id}`);
  }
}
