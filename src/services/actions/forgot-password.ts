import {api, IForgotPasswordFormData} from '../../utils/api';
import {AppDispatch, AppThunk} from '../index';

export const FORGOTPASSWORD_CHANGE_EMAIL: 'FORGOTPASSWORD_CHANGE_EMAIL' = 'FORGOTPASSWORD_CHANGE_EMAIL';
export const FORGOTPASSWORD_LOADING: 'FORGOTPASSWORD_LOADING' = 'FORGOTPASSWORD_LOADING';
export const FORGOTPASSWORD_SUCCESS: 'FORGOTPASSWORD_SUCCESS' = 'FORGOTPASSWORD_SUCCESS';
export const FORGOTPASSWORD_FAILED: 'FORGOTPASSWORD_FAILED' = 'FORGOTPASSWORD_FAILED';

export interface IForgotPasswordChangeEmailAction {
  readonly type: typeof FORGOTPASSWORD_CHANGE_EMAIL;
  email: string;
  valid: boolean;
}

export interface IForgotPasswordLoadingAction {
  readonly type: typeof FORGOTPASSWORD_LOADING;
}

export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOTPASSWORD_SUCCESS;
}

export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOTPASSWORD_FAILED;
  error: string;
}

export type TForgotPasswordActions =
    IForgotPasswordChangeEmailAction
    | IForgotPasswordLoadingAction
    | IForgotPasswordSuccessAction
    | IForgotPasswordFailedAction;

export const startForgotPassword: AppThunk = (formData: IForgotPasswordFormData) => (dispatch: AppDispatch) => {
  dispatch({
    type: FORGOTPASSWORD_LOADING,
  })

  api.forgotPassword(formData).then(() => {
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

export const changeEmail = (email: string, valid: boolean): IForgotPasswordChangeEmailAction => {
  return {
    type: FORGOTPASSWORD_CHANGE_EMAIL,
    email: email,
    valid: valid,
  }
}
