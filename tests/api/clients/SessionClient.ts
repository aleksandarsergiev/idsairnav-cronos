import { APIRequestContext, APIResponse } from '@playwright/test';

export class SessionClient {
  constructor(private request: APIRequestContext) {}

  async login(userLogin: string, password: string): Promise<APIResponse> {
    return this.request.post(`${process.env.API_BASE_URL}/session/login`, {
      params: { userLogin, password, policies: true },
    });
  }
}
