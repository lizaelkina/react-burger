import {resetPasswordRequest} from '../../utils/api';

export const RESETPASSWORD_CHANGE_PASSWORD = 'RESETPASSWORD_CHANGE_EMAIL';
export const RESETPASSWORD_CHANGE_CODE = 'RESETPASSWORD_CHANGE_CODE';
export const RESETPASSWORD_LOADING = 'RESETPASSWORD_LOADING';
export const RESETPASSWORD_SUCCESS = 'RESETPASSWORD_SUCCESS';
export const RESETPASSWORD_FAILED = 'RESETPASSWORD_FAILED';

export const startResetPassword = (formData) => dispatch => {
  dispatch({
    type: RESETPASSWORD_LOADING,
  })

  resetPasswordRequest(formData).then(response => {
    dispatch({
      type: RESETPASSWORD_SUCCESS,
    })
  }).catch(error => {
    dispatch({
      type: RESETPASSWORD_FAILED,
      error: error,
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

export function changeCode(code, valid) {
  return {
    type: RESETPASSWORD_CHANGE_CODE,
    code: code,
    valid: valid,
  }
}