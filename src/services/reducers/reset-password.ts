import {
  RESETPASSWORD_CHANGE_CODE,
  RESETPASSWORD_CHANGE_PASSWORD,
  RESETPASSWORD_FAILED,
  RESETPASSWORD_LOADING,
  RESETPASSWORD_SUCCESS,
  TResetPasswordActions
} from '../actions/reset-password';
import {IResetPasswordFormData} from '../../utils/api';

type TResetPasswordFormValidity = {
  password: boolean;
  token: boolean;
}

type TResetPasswordState = {
  formData: IResetPasswordFormData;
  formValidity: TResetPasswordFormValidity;
  isLoading: boolean;
  success: boolean;
  errorMessage: string | null;
}

const initialState: TResetPasswordState = {
  formData: {
    password: '',
    token: '',
  },
  formValidity: {
    password: false,
    token: false,
  },
  isLoading: false,
  success: false,
  errorMessage: null,
}

export const createResetPasswordReducer = (state = initialState, action: TResetPasswordActions): TResetPasswordState => {
  switch (action.type) {
    case RESETPASSWORD_LOADING: {
      return {
        ...state,
        isLoading: true,
        success: false,
        errorMessage: null,
      }
    }
    case RESETPASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
      }
    }
    case RESETPASSWORD_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      }
    }
    case RESETPASSWORD_CHANGE_PASSWORD: {
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
    case RESETPASSWORD_CHANGE_CODE: {
      return {
        ...state,
        formData: {
          ...state.formData,
          token: action.token,
        },
        formValidity: {
          ...state.formValidity,
          token: action.valid,
        },
        errorMessage: null,
      }
    }
    default: {
      return state;
    }
  }
}
