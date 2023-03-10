const apiUrl = 'https://norma.nomoreparties.space/api';

export const getIngredients = () => fetch(`${apiUrl}/ingredients `)
    .then(response => {
      if (response.ok) {
          return response.json();
      }
      return Promise.reject(`${response.status}: ${response.statusText}`);
    })
    .then(dataIngredients => {
        if (dataIngredients.success) {
            return dataIngredients.data;
        }
    })
