import {getAccessToken, getRefreshToken, setAccessToken, setRefreshToken} from './token-store';

const API_URL = 'https://norma.nomoreparties.space/api';
const DEFAULT_HEADER = {
  "Content-Type": "application/json",
};

const getHeadersWithToken = () => ({
  ...DEFAULT_HEADER,
  authorization: getAccessToken(),
});

const request = (endpoint, options) => {
  return fetch(`${API_URL}/${endpoint}`, options)
      .then(async response => {
        try {
          const json = await response.json();
          if (response.ok && json.success) {
            return Promise.resolve(json);
          }
          return Promise.reject({error: json?.message, statusCode: response.status});
        } catch (error) {
          return Promise.reject({error: `Ошибка: ${response.status}`});
        }
      })
}

const requestWithRefresh = async (endpoint, options) => {
  try {
    return await request(endpoint, options);
  } catch (error) {
    if (error.statusCode === 401 || error.statusCode === 403) {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        await Promise.reject(refreshData);
      }
      setAccessToken(refreshData.accessToken);
      setRefreshToken(refreshData.refreshToken);
      options.headers.authorization = refreshData.accessToken;
      return await request(endpoint, options);
    } else {
      await Promise.reject(error);
    }
  }
}

export const getIngredients = () => request('ingredients');

export const createOrder = (ingredientIdList) => request('orders',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify({
        ingredients: ingredientIdList,
      })
    });

export const getUser = () => requestWithRefresh('auth/user', {
  headers: getHeadersWithToken(),
});

export const registerRequest = (formData) => request('auth/register',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    });

export const loginRequest = (formData) => request('auth/login',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    });

export const forgotPasswordRequest = (formData) => request('password-reset',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    });

export const resetPasswordRequest = (formData) => request('password-reset/reset',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    });

export const changeProfileRequest = (formData) => requestWithRefresh('auth/user',
    {
      method: 'PATCH',
      headers: getHeadersWithToken(),
      body: JSON.stringify(formData),
    });

export const refreshToken = () => request('auth/token',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify({
        token: getRefreshToken(),
      }),
    });

export const logoutRequest = () => request('auth/logout',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify({
        token: getRefreshToken(),
      }),
    });
