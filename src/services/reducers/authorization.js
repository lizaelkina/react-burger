import {
  AUTHORIZATION_CHANGE_EMAIL,
  AUTHORIZATION_CHANGE_PASSWORD,
  AUTHORIZATION_FAILED,
  AUTHORIZATION_LOADING,
  AUTHORIZATION_SUCCESS
} from '../actions/authorization';

const initialState = {
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
  errorMessage: null,
};

export const createAuthorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_LOADING: {
      return {
        ...state,
        isLoading: true,
        success: false,
        errorMessage: null,
      }
    }
    case AUTHORIZATION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
      }
    }
    case AUTHORIZATION_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      }
    }
    case AUTHORIZATION_CHANGE_EMAIL: {
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
    case AUTHORIZATION_CHANGE_PASSWORD: {
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
