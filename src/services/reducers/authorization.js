import {AUTHORIZATION_CHANGE_EMAIL, AUTHORIZATION_CHANGE_PASSWORD} from '../actions/authorization';

const initialState = {
  formData: {
    email: '',
    password: '',
  },
  isLoading: false,
  success: false,
  errorMessage: null,
};

export const createAuthorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_CHANGE_EMAIL: {
      return {
        ...state,
        formData: {
          ...state.formData,
          email: action.email,
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
        errorMessage: null,
      }
    }
    default: {
      return state;
    }
  }
}
