const API_URL = 'https://norma.nomoreparties.space/api';
const DEFAULT_HEADER = {
  "Content-Type": "application/json",
};

const checkResponse = response => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`${response.status}`);
};

const checkSuccess = response => {
  if (response && response.success) {
    return response;
  }
  return Promise.reject(`Ответ: ${response}`);
};

const request = (endpoint, options) => {
  return fetch(`${API_URL}/${endpoint}`, options)
      .then(checkResponse)
      .then(checkSuccess)
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
