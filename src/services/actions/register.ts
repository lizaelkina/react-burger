import {api, IRegisterFormData} from '../../utils/api';
import {IUser} from '../../utils/data-types';
import {AppDispatch, AppThunk} from '../index';

export const REGISTER_CHANGE_NAME: 'REGISTER_CHANGE_NAME' = 'REGISTER_CHANGE_NAME';
export const REGISTER_CHANGE_EMAIL: 'REGISTER_CHANGE_EMAIL' = 'REGISTER_CHANGE_EMAIL';
export const REGISTER_CHANGE_PASSWORD: 'REGISTER_CHANGE_PASSWORD' = 'REGISTER_CHANGE_PASSWORD';
export const REGISTER_LOADING: 'REGISTER_LOADING' = 'REGISTER_LOADING';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_FAILED: 'REGISTER_FAILED' = 'REGISTER_FAILED';

export interface IRegisterChangeNameAction {
  readonly type: typeof REGISTER_CHANGE_NAME;
  name: string;
  valid: boolean;
}

export interface IRegisterChangeEmailAction {
  readonly type: typeof REGISTER_CHANGE_EMAIL;
  email: string;
  valid: boolean;
}

export interface IRegisterChangePasswordAction {
  readonly type: typeof REGISTER_CHANGE_PASSWORD;
  password: string;
  valid: boolean;
}

export interface IRegisterLoadingAction {
  readonly type: typeof REGISTER_LOADING;
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
  error: string;
}

export type TRegisterActions =
    IRegisterChangeNameAction
    | IRegisterChangeEmailAction
    | IRegisterChangePasswordAction
    | IRegisterLoadingAction
    | IRegisterSuccessAction
    | IRegisterFailedAction;

export const startRegister = (formData: IRegisterFormData): AppThunk => (dispatch: AppDispatch) => {
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

export const changeName = (name: string, valid: boolean): IRegisterChangeNameAction => {
  return {
    type: REGISTER_CHANGE_NAME,
    name: name,
    valid: valid,
  }
}

export const changeEmail = (email: string, valid: boolean): IRegisterChangeEmailAction => {
  return {
    type: REGISTER_CHANGE_EMAIL,
    email: email,
    valid: valid,
  }
}

export const changePassword = (password: string, valid: boolean): IRegisterChangePasswordAction => {
  return {
    type: REGISTER_CHANGE_PASSWORD,
    password: password,
    valid: valid,
  }
}
