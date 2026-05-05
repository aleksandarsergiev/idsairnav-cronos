function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const users: Record<string, { username: string; password: string }> = {
  user1: {
    username: requireEnv('USER1_USERNAME'),
    password: requireEnv('USER1_PASSWORD'),
  },
  user2: {
    username: requireEnv('USER2_USERNAME'),
    password: requireEnv('USER2_PASSWORD'),
  },
};
