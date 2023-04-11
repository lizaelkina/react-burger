import {
  RESETPASSWORD_CHANGE_PASSWORD,
  RESETPASSWORD_CHANGE_TOKEN,
  RESETPASSWORD_FAILED,
  RESETPASSWORD_LOADING,
  RESETPASSWORD_SUCCESS
} from '../actions/reset-password';

const initialState = {
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
    case RESETPASSWORD_CHANGE_TOKEN: {
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
