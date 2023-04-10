const API_URL = 'https://norma.nomoreparties.space/api';
const DEFAULT_HEADER = {
  "Content-Type": "application/json",
};

const request = (endpoint, options) => {
  return fetch(`${API_URL}/${endpoint}`, options)
      .then(async response => {
        try {
          const json = await response.json()
          if (response.ok && json.success) {
            return Promise.resolve(json);
          }
          return Promise.reject(json?.message);
        } catch (error) {
          return Promise.reject(`Ошибка: ${response.status}`);
        }
      })
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

export const getUser = () => request('auth/user');

export const registerRequest = (formData) => request('auth/register',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    });

export const authorizationRequest = (formData) => request('auth/login',
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
    }
);

export const resetPasswordRequest = (formData) => request('password-reset/reset',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    }
);

export const changeProfileRequest = (formData) => request('auth/user',
    {
      method: 'PATCH',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    }
);

export const logoutRequest = (token) => request('auth/logout',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(token),
    }
);
