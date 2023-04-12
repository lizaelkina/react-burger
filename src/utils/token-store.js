const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export const setAccessToken = (token) => {
  return localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export const deleteAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export const setRefreshToken = (token) => {
  return localStorage.setItem(REFRESH_TOKEN_KEY, token);
}

export const deleteRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}
