import {
  AUTH_USER,
  CHECK_USER_FAILED,
  CHECK_USER_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS
} from '../actions/auth';

const initialState = {
  user: null,
  isAuthChecked: false,
  isLogoutLoading: false,
}

export const createAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER: {
      return {
        ...state,
        user: action.user,
        isAuthChecked: true,
      }
    }
    case CHECK_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuthChecked: true,
      }
    }
    case CHECK_USER_FAILED: {
      return {
        ...state,
        user: null,
        isAuthChecked: true,
      }
    }
    case LOGOUT_LOADING: {
      return {
        ...state,
        isLogoutLoading: true,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLogoutLoading: false,
        user: null,
        isAuthChecked: false,
      }
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        isLogoutLoading: false,
        user: null,
        isAuthChecked: false,
      }
    }
    default: {
      return state;
    }
  }
}
