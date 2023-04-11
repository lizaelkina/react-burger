import {
  PROFILE_CANCEL_CHANGES,
  PROFILE_CHANGE_EMAIL,
  PROFILE_CHANGE_NAME,
  PROFILE_CHANGE_PASSWORD,
  PROFILE_FAILED,
  PROFILE_INIT_STATE,
  PROFILE_LOADING,
  PROFILE_SUCCESS
} from '../actions/profile';

const initialState = {
  formData: {
    name: '',
    email: '',
    password: '',
  },
  initData: {},
  formValidity: {
    name: true,
    email: true,
    password: true,
  },
  formDataChanged: false,
  isLoading: false,
  success: false,
  errorMessage: null,
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_INIT_STATE: {
      return {
        ...state,
        formData: action.user,
        initData: action.user,
      }
    }
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
        formDataChanged: false,
        initData: {
          ...state.formData,
        },
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
          ...state.initData,
        },
        formDataChanged: false,
        errorMessage: null,
      }
    }
    case PROFILE_CHANGE_NAME: {
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
        formValidity: {
          ...state.formValidity,
          email: action.valid,
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
        formValidity: {
          ...state.formValidity,
          password: action.valid,
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
