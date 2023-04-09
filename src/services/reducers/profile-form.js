import {
  PROFILE_CANCEL_CHANGES,
  PROFILE_CHANGE_EMAIL,
  PROFILE_CHANGE_NAME,
  PROFILE_CHANGE_PASSWORD,
  PROFILE_FAILED,
  PROFILE_LOADING,
  PROFILE_SUCCESS
} from '../actions/profile-form';

const CURRENT_USER = {
  name: 'Liza',
  email: 'liza@mail.ru',
  password: '123456',
};

const initialState = {
  formData: {
    ...CURRENT_USER,
  },
  formDataChanged: false,
  isLoading: false,
  success: false,
  errorMessage: null,
};

export const createProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING: {
      return {
        ...state,
        isLoading: true,
        success: false,
        errorMessage: null,
      }
    }
    case PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
      }
    }
    case PROFILE_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      }
    }
    case PROFILE_CANCEL_CHANGES: {
      return {
        ...state,
        formData: {
          ...CURRENT_USER,
        },
        formDataChanged: false,
      }
    }
    case PROFILE_CHANGE_NAME: {
      return {
        ...state,
        formData: {
          ...state.formData,
          name: action.name,
        },
        formDataChanged: true,
        errorMessage: null,
      }
    }
    case PROFILE_CHANGE_EMAIL: {
      return {
        ...state,
        formData: {
          ...state.formData,
          email: action.email,
        },
        formDataChanged: true,
        errorMessage: null,
      }
    }
    case PROFILE_CHANGE_PASSWORD: {
      return {
        ...state,
        formData: {
          ...state.formData,
          password: action.password,
        },
        formDataChanged: true,
        errorMessage: null,
      }
    }
    default: {
      return state;
    }
  }
}
