import {
  RESETPASSWORD_CHANGE_CODE,
  RESETPASSWORD_CHANGE_PASSWORD,
  RESETPASSWORD_FAILED,
  RESETPASSWORD_LOADING,
  RESETPASSWORD_SUCCESS
} from '../actions/reset-password';

const initialState = {
  formData: {
    password: '',
    code: '',
  },
  formValidity: {
    password: false,
    code: false,
  },
  isLoading: false,
  success: false,
  errorMessage: null,
};

export const createResetPasswordReducer = (state = initialState, action) => {
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
          code: action.code,
        },
        formValidity: {
          ...state.formValidity,
          code: action.valid,
        },
        errorMessage: null,
      }
    }
    default: {
      return state;
    }
  }
}
