export const AUTHORIZATION_CHANGE_EMAIL = 'AUTHORIZATION_CHANGE_EMAIL';
export const AUTHORIZATION_CHANGE_PASSWORD = 'AUTHORIZATION_CHANGE_PASSWORD';
export const AUTHORIZATION_LOADING = 'AUTHORIZATION_LOADING';
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_FAILED = 'AUTHORIZATION_FAILED';

export const startAuthorization = (formData) => dispatch => {
  dispatch({
    type: AUTHORIZATION_LOADING,
  })
}

export function changeEmail(email) {
  return {
    type: AUTHORIZATION_CHANGE_EMAIL,
    email: email,
  }
}

export function changePassword(password) {
  return {
    type: AUTHORIZATION_CHANGE_PASSWORD,
    password: password,
  }
}
