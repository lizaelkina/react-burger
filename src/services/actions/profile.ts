import {api, IUpdateProfileFormData} from '../../utils/api';
import {IUser} from '../../utils/data-types';
import {AppDispatch, AppThunk} from '../index';

export const PROFILE_INIT_STATE: 'PROFILE_INIT_STATE' = 'PROFILE_INIT_STATE';
export const PROFILE_CHANGE_NAME: 'PROFILE_CHANGE_NAME' = 'PROFILE_CHANGE_NAME';
export const PROFILE_CHANGE_EMAIL: 'PROFILE_CHANGE_EMAIL' = 'PROFILE_CHANGE_EMAIL';
export const PROFILE_CHANGE_PASSWORD: 'PROFILE_CHANGE_PASSWORD' = 'PROFILE_CHANGE_PASSWORD';
export const PROFILE_LOADING: 'PROFILE_LOADING' = 'PROFILE_LOADING';
export const PROFILE_SUCCESS: 'PROFILE_SUCCESS' = 'PROFILE_SUCCESS';
export const PROFILE_FAILED: 'PROFILE_FAILED' = 'PROFILE_FAILED';
export const PROFILE_CANCEL_CHANGES: 'PROFILE_CANCEL' = 'PROFILE_CANCEL';

export interface IProfileInitStateAction {
  readonly type: typeof PROFILE_INIT_STATE;
  user: IUser;
}

export interface IProfileChangeNameAction {
  readonly type: typeof PROFILE_CHANGE_NAME;
  name: string;
  valid: boolean;
}

export interface IProfileChangeEmailAction {
  readonly type: typeof PROFILE_CHANGE_EMAIL;
  email: string;
  valid: boolean;
}

export interface IProfileChangePasswordAction {
  readonly type: typeof PROFILE_CHANGE_PASSWORD;
  password: string;
  valid: boolean;
}

export interface IProfileLoadingAction {
  readonly type: typeof PROFILE_LOADING;
}

export interface IProfileSuccessAction {
  readonly type: typeof PROFILE_SUCCESS;
  user: IUser;
}

export interface IProfileFailedAction {
  readonly type: typeof PROFILE_FAILED;
  error: string;
}

export interface IProfileCancelChangesAction {
  readonly type: typeof PROFILE_CANCEL_CHANGES;
}

export type TProfileActions =
    IProfileInitStateAction
    | IProfileChangeNameAction
    | IProfileChangeEmailAction
    | IProfileChangePasswordAction
    | IProfileLoadingAction
    | IProfileSuccessAction
    | IProfileFailedAction
    | IProfileCancelChangesAction;

export const startUpdateProfile: AppThunk = (formData: IUpdateProfileFormData) => (dispatch: AppDispatch) => {
  dispatch({
    type: PROFILE_LOADING,
  })

  api.updateProfile(formData).then(response => {
    dispatch({
      type: PROFILE_SUCCESS,
      user: response.user,
    })
  }).catch(response => {
    dispatch({
      type: PROFILE_FAILED,
      error: response.error,
    })
  })
}

export const changeName = (name: string, valid: boolean): IProfileChangeNameAction => {
  return {
    type: PROFILE_CHANGE_NAME,
    name: name,
    valid: valid,
  }
}

export const changeEmail = (email: string, valid: boolean): IProfileChangeEmailAction => {
  return {
    type: PROFILE_CHANGE_EMAIL,
    email: email,
    valid: valid,
  }
}

export const changePassword = (password: string, valid: boolean): IProfileChangePasswordAction => {
  return {
    type: PROFILE_CHANGE_PASSWORD,
    password: password,
    valid: valid,
  }
}

export const cancelChanges = (): IProfileCancelChangesAction => {
  return {
    type: PROFILE_CANCEL_CHANGES,
  }
}

export const profileInitState = (user: IUser): IProfileInitStateAction => {
  return {
    type: PROFILE_INIT_STATE,
    user: user,
  }
}
