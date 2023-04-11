import {resetPasswordRequest} from '../../utils/api';

export const RESETPASSWORD_CHANGE_PASSWORD = 'RESETPASSWORD_CHANGE_EMAIL';
export const RESETPASSWORD_CHANGE_TOKEN = 'RESETPASSWORD_CHANGE_TOKEN';
export const RESETPASSWORD_LOADING = 'RESETPASSWORD_LOADING';
export const RESETPASSWORD_SUCCESS = 'RESETPASSWORD_SUCCESS';
export const RESETPASSWORD_FAILED = 'RESETPASSWORD_FAILED';

export const startResetPassword = (formData) => dispatch => {
  dispatch({
    type: RESETPASSWORD_LOADING,
  })

  resetPasswordRequest(formData).then(() => {
    dispatch({
      type: RESETPASSWORD_SUCCESS,
    })
  }).catch(response => {
    dispatch({
      type: RESETPASSWORD_FAILED,
      error: response.error,
    })
  })
}

export function changePassword(password, valid) {
  return {
    type: RESETPASSWORD_CHANGE_PASSWORD,
    password: password,
    valid: valid,
  }
}

export function changeCode(token, valid) {
  return {
    type: RESETPASSWORD_CHANGE_TOKEN,
    token: token,
    valid: valid,
  }
}
