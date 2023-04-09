import {authorizationRequest} from '../../utils/api';

export const AUTHORIZATION_CHANGE_EMAIL = 'AUTHORIZATION_CHANGE_EMAIL';
export const AUTHORIZATION_CHANGE_PASSWORD = 'AUTHORIZATION_CHANGE_PASSWORD';
export const AUTHORIZATION_LOADING = 'AUTHORIZATION_LOADING';
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_FAILED = 'AUTHORIZATION_FAILED';

export const startAuthorization = (formData) => dispatch => {
  dispatch({
    type: AUTHORIZATION_LOADING,
  })

  authorizationRequest(formData).then(response => {
    dispatch({
      type: AUTHORIZATION_SUCCESS,
    })
  }).catch(error => {
    dispatch({
      type: AUTHORIZATION_FAILED,
      error: error,
    })
  })
}

export function changeEmail(email, valid) {
  return {
    type: AUTHORIZATION_CHANGE_EMAIL,
    email: email,
    valid: valid,
  }
}

export function changePassword(password, valid) {
  return {
    type: AUTHORIZATION_CHANGE_PASSWORD,
    password: password,
    valid: valid,
  }
}
