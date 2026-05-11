export const apiCredentials = {
  get userLogin() { return process.env.API_USERNAME ?? ''; },
  get password() { return process.env.API_PASSWORD ?? ''; },
};
