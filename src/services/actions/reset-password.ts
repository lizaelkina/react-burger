import {api, IResetPasswordFormData} from '../../utils/api';
import {AppDispatch, AppThunk} from '../index';

export const RESETPASSWORD_CHANGE_PASSWORD: 'RESETPASSWORD_CHANGE_PASSWORD' = 'RESETPASSWORD_CHANGE_PASSWORD';
export const RESETPASSWORD_CHANGE_CODE: 'RESETPASSWORD_CHANGE_CODE' = 'RESETPASSWORD_CHANGE_CODE';
export const RESETPASSWORD_LOADING: 'RESETPASSWORD_LOADING' = 'RESETPASSWORD_LOADING';
export const RESETPASSWORD_SUCCESS: 'RESETPASSWORD_SUCCESS' = 'RESETPASSWORD_SUCCESS';
export const RESETPASSWORD_FAILED: 'RESETPASSWORD_FAILED' = 'RESETPASSWORD_FAILED';

export interface IResetPasswordChangePasswordAction {
  readonly type: typeof RESETPASSWORD_CHANGE_PASSWORD;
  password: string;
  valid: boolean;
}

export interface IResetPasswordChangeCodeAction {
  readonly type: typeof RESETPASSWORD_CHANGE_CODE;
  token: string;
  valid: boolean;
}

export interface IResetPasswordLoadingAction {
  readonly type: typeof RESETPASSWORD_LOADING;
}

export interface IResetPasswordSuccessAction {
  readonly type: typeof RESETPASSWORD_SUCCESS;
}

export interface IResetPasswordFailedAction {
  readonly type: typeof RESETPASSWORD_FAILED;
  error: string;
}

export type TResetPasswordActions =
    IResetPasswordChangePasswordAction
    | IResetPasswordChangeCodeAction
    | IResetPasswordLoadingAction
    | IResetPasswordSuccessAction
    | IResetPasswordFailedAction;


export const startResetPassword = (formData: IResetPasswordFormData): AppThunk => (dispatch: AppDispatch) => {
  dispatch({
    type: RESETPASSWORD_LOADING,
  })

  api.resetPassword(formData).then(() => {
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

export const changePassword = (password: string, valid: boolean): IResetPasswordChangePasswordAction => {
  return {
    type: RESETPASSWORD_CHANGE_PASSWORD,
    password: password,
    valid: valid,
  }
}

export const changeCode = (token: string, valid: boolean): IResetPasswordChangeCodeAction => {
  return {
    type: RESETPASSWORD_CHANGE_CODE,
    token: token,
    valid: valid,
  }
}
