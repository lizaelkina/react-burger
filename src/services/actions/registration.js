import {registerRequest} from '../../utils/api';

export const REGISTRATION_CHANGE_NAME = 'CHANGE_NAME';
export const REGISTRATION_CHANGE_EMAIL = 'CHANGE_EMAIL';
export const REGISTRATION_CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const REGISTRATION_LOADING = 'REGISTRATION_LOADING';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const startRegistration = (formData) => dispatch => {
  dispatch({
    type: REGISTRATION_LOADING,
  })

  registerRequest(formData).then(response => {
    dispatch({
      type: REGISTRATION_SUCCESS,
    })
  }).catch(error => {
    dispatch({
      type: REGISTRATION_FAILED,
      error: error,
    })
  })
}

export function changeName(name, valid) {
  return {
    type: REGISTRATION_CHANGE_NAME,
    name: name,
    valid: valid,
  }
}

export function changeEmail(email, valid) {
  return {
    type: REGISTRATION_CHANGE_EMAIL,
    email: email,
    valid: valid,
  }
}

export function changePassword(password, valid) {
  return {
    type: REGISTRATION_CHANGE_PASSWORD,
    password: password,
    valid: valid,
  }
}