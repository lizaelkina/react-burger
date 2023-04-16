import {api} from '../../utils/api';

export const REGISTER_CHANGE_NAME = 'REGISTER_CHANGE_NAME';
export const REGISTER_CHANGE_EMAIL = 'REGISTER_CHANGE_EMAIL';
export const REGISTER_CHANGE_PASSWORD = 'REGISTER_CHANGE_PASSWORD';
export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const startRegister = (formData) => dispatch => {
  dispatch({
    type: REGISTER_LOADING,
  })

  api.register(formData).then(response => {
    dispatch({
      type: REGISTER_SUCCESS,
      user: response.user,
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    })
  }).catch(response => {
    dispatch({
      type: REGISTER_FAILED,
      error: response.error,
    })
  })
}

export function changeName(name, valid) {
  return {
    type: REGISTER_CHANGE_NAME,
    name: name,
    valid: valid,
  }
}

export function changeEmail(email, valid) {
  return {
    type: REGISTER_CHANGE_EMAIL,
    email: email,
    valid: valid,
  }
}

export function changePassword(password, valid) {
  return {
    type: REGISTER_CHANGE_PASSWORD,
    password: password,
    valid: valid,
  }
}
