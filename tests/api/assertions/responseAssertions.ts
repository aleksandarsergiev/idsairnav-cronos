import { APIResponse, expect } from '@playwright/test';
import { DataTable } from 'playwright-bdd';

export function expectResponseStatus(response: APIResponse, expected: number) {
  expect(response.status()).toBe(expected);
}

export async function expectResponseToContain(response: APIResponse, dataTable: DataTable) {
  const body = await response.json();
  for (const row of dataTable.hashes()) {
    expect(body[row.field]).toBe(row.value);
  }
}
