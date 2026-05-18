import { APIResponse, expect } from '@playwright/test';
import { DataTable } from 'playwright-bdd';

function getByPath(obj: any, path: string): unknown {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

export function expectResponseStatus(response: APIResponse, expected: number) {
  expect(response.status()).toBe(expected);
}

export async function expectResponseToContain(response: APIResponse, dataTable: DataTable) {
  const body = await response.json();
  for (const row of dataTable.hashes()) {
    expect(body[row.field]).toBe(row.value);
  }
}

export async function expectResponseFieldEquals(response: APIResponse, path: string, expected: unknown) {
  const body = await response.json();
  expect(getByPath(body, path)).toEqual(expected);
}

export async function expectResponseFieldExists(response: APIResponse, path: string) {
  const body = await response.json();
  expect(getByPath(body, path)).toBeDefined();
}

export async function expectResponseFieldsToEqual(response: APIResponse, dataTable: DataTable, prefix = '') {
  for (const row of dataTable.hashes()) {
    await expectResponseFieldEquals(response, `${prefix}${row.field}`, row.value);
  }
}

export async function expectResponseFieldsToExist(response: APIResponse, dataTable: DataTable, prefix = '') {
  for (const row of dataTable.hashes()) {
    await expectResponseFieldExists(response, `${prefix}${row.field}`);
  }
}

export function expectResponseHeader(response: APIResponse, name: string, value?: string) {
  const headerValue = response.headers()[name.toLowerCase()];
  if (value !== undefined) {
    expect(headerValue).toBe(value);
  } else {
    expect(headerValue).toBeDefined();
  }
}
