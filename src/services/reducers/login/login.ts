import {
  LOGIN_CHANGE_EMAIL,
  LOGIN_CHANGE_PASSWORD,
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  TLoginActions
} from '../../actions/login';
import {AUTH_USER} from '../../actions/auth';
import {ILoginFormData} from '../../../utils/api';
import {IUser} from '../../../utils/data-types';

type TLoginFormValidity = {
  email: boolean;
  password: boolean;
}

type TLoginState = {
  formData: ILoginFormData;
  formValidity: TLoginFormValidity;
  isLoading: boolean;
  success: boolean;
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  errorMessage: string | null;
}

export const initialState: TLoginState = {
  formData: {
    email: '',
    password: '',
  },
  formValidity: {
    email: false,
    password: false,
  },
  isLoading: false,
  success: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  errorMessage: null,
}

export const createLoginReducer = (state = initialState, action: TLoginActions): TLoginState => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        success: false,
      }
    case LOGIN_LOADING: {
      return {
        ...state,
        isLoading: true,
        success: false,
        errorMessage: null,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
        user: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      }
    }
    case LOGIN_CHANGE_EMAIL: {
      return {
        ...state,
        formData: {
          ...state.formData,
          email: action.email,
        },
        formValidity: {
          ...state.formValidity,
          email: action.valid,
        },
        errorMessage: null,
      }
    }
    case LOGIN_CHANGE_PASSWORD: {
      return {
        ...state,
        formData: {
          ...state.formData,
          password: action.password,
        },
        formValidity: {
          ...state.formValidity,
          password: action.valid,
        },
        errorMessage: null,
      }
    }
    default: {
      return state;
    }
  }
}
