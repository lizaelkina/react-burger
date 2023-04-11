import {forgotPasswordRequest} from '../../utils/api';

export const FORGOTPASSWORD_CHANGE_EMAIL = 'FORGOTPASSWORD_CHANGE_EMAIL';
export const FORGOTPASSWORD_LOADING = 'FORGOTPASSWORD_LOADING';
export const FORGOTPASSWORD_SUCCESS = 'FORGOTPASSWORD_SUCCESS';
export const FORGOTPASSWORD_FAILED = 'FORGOTPASSWORD_FAILED';

export const startForgotPassword = (formData) => dispatch => {
  dispatch({
    type: FORGOTPASSWORD_LOADING,
  })

  forgotPasswordRequest(formData).then(() => {
    dispatch({
      type: FORGOTPASSWORD_SUCCESS,
    })
  }).catch(response => {
    dispatch({
      type: FORGOTPASSWORD_FAILED,
      error: response.error,
    })
  })
}

export function changeEmail(email, valid) {
  return {
    type: FORGOTPASSWORD_CHANGE_EMAIL,
    email: email,
    valid: valid,
  }
}
