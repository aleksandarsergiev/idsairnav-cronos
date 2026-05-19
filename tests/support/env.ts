import 'dotenv/config';

export function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}. Check your .env file.`);
  }
  return value;
}
