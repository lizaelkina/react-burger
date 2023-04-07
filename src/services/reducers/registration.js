import {
  REGISTRATION_CHANGE_EMAIL,
  REGISTRATION_CHANGE_NAME,
  REGISTRATION_CHANGE_PASSWORD,
  REGISTRATION_FAILED,
  REGISTRATION_LOADING,
  REGISTRATION_SUCCESS
} from '../actions/registration';

const initialState = {
  formData: {
    name: '',
    email: '',
    password: '',
  },
  isLoading: false,
  success: false,
  errorMessage: null,
};

export const createRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_LOADING: {
      return {
        ...state,
        isLoading: true,
        success: false,
        errorMessage: null,
      }
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
      }
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      }
    }
    case REGISTRATION_CHANGE_NAME: {
      return {
        ...state,
        formData: {
          ...state.formData,
          name: action.name,
        }
      }
    }
    case REGISTRATION_CHANGE_EMAIL: {
      return {
        ...state,
        formData: {
          ...state.formData,
          email: action.email,
        }
      }
    }
    case REGISTRATION_CHANGE_PASSWORD: {
      return {
        ...state,
        formData: {
          ...state.formData,
          password: action.password,
        }
      }
    }
    default: {
      return state;
    }
  }
}
