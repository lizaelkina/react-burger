import {loginRequest} from '../../utils/api';

export const LOGIN_CHANGE_EMAIL = 'LOGIN_CHANGE_EMAIL';
export const LOGIN_CHANGE_PASSWORD = 'LOGIN_CHANGE_PASSWORD';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const startLogin = (formData) => dispatch => {
  dispatch({
    type: LOGIN_LOADING,
  })

  loginRequest(formData).then(response => {
    dispatch({
      type: LOGIN_SUCCESS,
    })
  }).catch(error => {
    dispatch({
      type: LOGIN_FAILED,
      error: error,
    })
  })
}

export function changeEmail(email, valid) {
  return {
    type: LOGIN_CHANGE_EMAIL,
    email: email,
    valid: valid,
  }
}

export function changePassword(password, valid) {
  return {
    type: LOGIN_CHANGE_PASSWORD,
    password: password,
    valid: valid,
  }
}
