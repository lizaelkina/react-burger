import {api, ILoginFormData} from '../../utils/api';
import {IUser} from '../../utils/data-types';
import {IAuthUserAction} from './auth';
import {AppDispatch, AppThunk} from '../index';

export const LOGIN_CHANGE_EMAIL: 'LOGIN_CHANGE_EMAIL' = 'LOGIN_CHANGE_EMAIL';
export const LOGIN_CHANGE_PASSWORD: 'LOGIN_CHANGE_PASSWORD' = 'LOGIN_CHANGE_PASSWORD';
export const LOGIN_LOADING: 'LOGIN_LOADING' = 'LOGIN_LOADING';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILED: 'LOGIN_FAILED' = 'LOGIN_FAILED';

export interface ILoginChangeEmailAction {
  readonly type: typeof LOGIN_CHANGE_EMAIL;
  email: string;
  valid: boolean;
}

export interface ILoginChangePasswordAction {
  readonly type: typeof LOGIN_CHANGE_PASSWORD;
  password: string;
  valid: boolean;
}

export interface ILoginLoadingAction {
  readonly type: typeof LOGIN_LOADING;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
  error: string;
}

export type TLoginActions =
    ILoginChangeEmailAction
    | ILoginChangePasswordAction
    | ILoginLoadingAction
    | ILoginSuccessAction
    | ILoginFailedAction
    | IAuthUserAction;

export const startLogin: AppThunk = (formData: ILoginFormData) => (dispatch: AppDispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  })

  api.login(formData).then(response => {
    dispatch({
      type: LOGIN_SUCCESS,
      user: response.user,
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    })
  }).catch(response => {
    dispatch({
      type: LOGIN_FAILED,
      error: response.error,
    })
  })
}

export const changeEmail = (email: string, valid: boolean): ILoginChangeEmailAction => {
  return {
    type: LOGIN_CHANGE_EMAIL,
    email: email,
    valid: valid,
  }
}

export const changePassword = (password: string, valid: boolean): ILoginChangePasswordAction => {
  return {
    type: LOGIN_CHANGE_PASSWORD,
    password: password,
    valid: valid,
  }
}
