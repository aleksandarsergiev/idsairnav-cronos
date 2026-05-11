export const users: Record<string, { username: string; password: string }> = {
  user1: {
    get username() { return process.env.USER1_USERNAME ?? ''; },
    get password() { return process.env.USER1_PASSWORD ?? ''; },
  },
  user2: {
    get username() { return process.env.USER2_USERNAME ?? ''; },
    get password() { return process.env.USER2_PASSWORD ?? ''; },
  },
};
