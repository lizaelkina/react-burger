import {api} from '../../utils/api';
import {deleteAccessToken, deleteRefreshToken, setAccessToken, setRefreshToken} from '../../utils/token-store';
import {IUser} from '../../utils/data-types';
import {AppDispatch, AppThunk} from '../index';

export const AUTH_USER: 'AUTH_USER' = 'AUTH_USER';

export const CHECK_USER_SUCCESS: 'CHECK_USER_SUCCESS' = 'CHECK_USER_SUCCESS';
export const CHECK_USER_FAILED: 'CHECK_USER_FAILED' = 'CHECK_USER_FAILED';

export const LOGOUT_LOADING: 'LOGOUT_LOADING' = 'LOGOUT_LOADING';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';

export interface IAuthUserAction {
  readonly type: typeof AUTH_USER;
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface ICheckUserSuccessAction {
  readonly type: typeof CHECK_USER_SUCCESS;
  user: IUser;
}

export interface ICheckUserFailedAction {
  readonly type: typeof CHECK_USER_FAILED;
  error: string;
}

export interface ILogoutLoadingAction {
  readonly type: typeof LOGOUT_LOADING;
}

export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
  error: string;
}

export type TAuthActions =
    IAuthUserAction
    | ICheckUserSuccessAction
    | ICheckUserFailedAction
    | ILogoutLoadingAction
    | ILogoutSuccessAction
    | ILogoutFailedAction;

export const authUser = (user: IUser, accessToken: string, refreshToken: string): IAuthUserAction => {
  setRefreshToken(refreshToken);
  setAccessToken(accessToken);
  return {
    type: AUTH_USER,
    user: user,
    accessToken: accessToken,
    refreshToken: refreshToken,
  }
}

export const startCheckUser = (): AppThunk => (dispatch: AppDispatch) => {
  api.getUser().then(response => {
    dispatch({
      type: CHECK_USER_SUCCESS,
      user: response.user,
    })
  }).catch(response => {
    dispatch({
      type: CHECK_USER_FAILED,
      error: response.error,
    })
  })
}

export const logout = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({
    type: LOGOUT_LOADING,
  })

  api.logout().then(() => {
    deleteAccessToken();
    deleteRefreshToken();
    dispatch({
      type: LOGOUT_SUCCESS,
    })
  }).catch(response => {
    deleteAccessToken();
    deleteRefreshToken();
    dispatch({
      type: LOGOUT_FAILED,
      error: response.error,
    })
  })
}
