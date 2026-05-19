import { required } from '../support/env';

export const users: Record<string, { username: string; password: string }> = {
  user1: {
    get username() { return required('USER1_USERNAME'); },
    get password() { return required('USER1_PASSWORD'); },
  },
  user2: {
    get username() { return required('USER2_USERNAME'); },
    get password() { return required('USER2_PASSWORD'); },
  },
};
