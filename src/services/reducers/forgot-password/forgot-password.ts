import {
  FORGOTPASSWORD_CHANGE_EMAIL,
  FORGOTPASSWORD_FAILED,
  FORGOTPASSWORD_LOADING,
  FORGOTPASSWORD_SUCCESS,
  TForgotPasswordActions
} from '../../actions/forgot-password';
import {IForgotPasswordFormData} from '../../../utils/api';

type TForgotPasswordFormValidity = {
  email: boolean;
}

type TForgotPasswordState = {
  formData: IForgotPasswordFormData;
  formValidity: TForgotPasswordFormValidity;
  isLoading: boolean;
  success: boolean;
  errorMessage: string | null;
}

export const initialState: TForgotPasswordState = {
  formData: {
    email: '',
  },
  formValidity: {
    email: false,
  },
  isLoading: false,
  success: false,
  errorMessage: null,
}

export const createForgotPasswordReducer = (state = initialState, action: TForgotPasswordActions): TForgotPasswordState => {
  switch (action.type) {
    case FORGOTPASSWORD_LOADING: {
      return {
        ...state,
        isLoading: true,
        success: false,
        errorMessage: null,
      }
    }
    case FORGOTPASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
      }
    }
    case FORGOTPASSWORD_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      }
    }
    case FORGOTPASSWORD_CHANGE_EMAIL: {
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
    default: {
      return state;
    }
  }
}
