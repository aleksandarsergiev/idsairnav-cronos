import { required } from '../support/env';

export const apiCredentials = {
  get userLogin() { return required('API_USERNAME'); },
  get password() { return required('API_PASSWORD'); },
};
