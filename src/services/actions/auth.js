import {getUser, logoutRequest} from '../../utils/api';

export const AUTH_USER = 'AUTH_USER';

export const CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS';
export const CHECK_USER_FAILED = 'CHECK_USER_FAILED';

export const LOGOUT_LOADING = 'LOGOUT_LOADING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export function authUser(user, accessToken, refreshToken) {
  return {
    type: AUTH_USER,
    user: user,
    accessToken: accessToken,
    refreshToken: refreshToken,
  }
}

export const startCheckUser = () => dispatch => {
  getUser().then(response => {
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

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_LOADING,
  })
  logoutRequest().then(response => {
    dispatch({
      type: LOGOUT_SUCCESS,
      user: response.user,
    })
  }).catch(response => {
    dispatch({
      type: LOGOUT_FAILED,
      error: response.error,
    })
  })
}