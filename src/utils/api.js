export const API_URL = 'https://norma.nomoreparties.space/api';

const checkResponse = response => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
};

const checkSuccess = response => {
  if (response && response.success) {
    return response.data;
  }
  return Promise.reject(`Ответ: ${response}`);
};

const request = (endpoint, options) => {
  return fetch(`${API_URL}/${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess)
}

export const getIngredients = () => request('ingredients')
