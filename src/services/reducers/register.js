import {
  REGISTER_CHANGE_EMAIL,
  REGISTER_CHANGE_NAME,
  REGISTER_CHANGE_PASSWORD,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS
} from '../actions/register';

const initialState = {
  formData: {
    name: '',
    email: '',
    password: '',
  },
  formValidity: {
    name: false,
    email: false,
    password: false,
  },
  isLoading: false,
  success: false,
  errorMessage: null,
};

export const createRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_LOADING: {
      return {
        ...state,
        isLoading: true,
        success: false,
        errorMessage: null,
      }
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
      }
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      }
    }
    case REGISTER_CHANGE_NAME: {
      return {
        ...state,
        formData: {
          ...state.formData,
          name: action.name,
        },
        formValidity: {
          ...state.formValidity,
          name: action.valid,
        },
        errorMessage: null,
      }
    }
    case REGISTER_CHANGE_EMAIL: {
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
    case REGISTER_CHANGE_PASSWORD: {
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
