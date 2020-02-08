import axios from 'axios';

import {
  API_URL,
} from '../constants/api.constant';

// Axios API Config
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const api = axios.create({
  baseURL: API_URL,
  headers: defaultHeaders,
});

// Base Requests
export const baseGet = ({ url, config }) => api.get(url, config);
export const basePost = ({ url, data, config }) => api.post(url, data, config);
export const basePut = ({ url, data }) => api.put(url, data);
export const basePatch = ({ url, data }) => api.patch(url, data);
export const baseDelete = ({ url, data }) => api.delete(url, data);

// Token Management
export const setClientAuthHeader = (token) => {
  if (token) api.defaults.headers.common[JWT_TOKEN] = token;
};

export const unsetClientAuthHeader = () => {
  api.defaults.headers.common[JWT_TOKEN] = '';
};

export const setPasswordTokenStorage = (token) => {
  if (token) api.defaults.headers.common[PASSWORD_TOKEN] = token;
};

export const unsetPasswordTokenStorage = () => {
  const passwordApiHeaderToken = api.defaults.headers.common[PASSWORD_TOKEN];
  if (passwordApiHeaderToken !== '' || passwordApiHeaderToken !== undefined) {
    api.defaults.headers.common[PASSWORD_TOKEN] = '';
  }
};

const handleTokenUpdate = (response) => {
  const { data: { token } } = response;

  if (token) {
    setClientAuthHeader(token);
  }

  return response;
};

const handleError = (error) => {
  const { status } = error.response;

  if (status === RESPONSE_CODES.invalidToken) {
    localClearToken();
  }

  return Promise.reject(error);
};
