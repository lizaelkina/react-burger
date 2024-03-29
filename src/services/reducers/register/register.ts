import {
  REGISTER_CHANGE_EMAIL,
  REGISTER_CHANGE_NAME,
  REGISTER_CHANGE_PASSWORD,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  TRegisterActions
} from '../../actions/register';
import {IRegisterFormData} from '../../../utils/api';
import {IUser} from '../../../utils/data-types';

type TRegisterFormValidity = {
  name: boolean;
  email: boolean;
  password: boolean;
}

type TRegisterState = {
  formData: IRegisterFormData;
  formValidity: TRegisterFormValidity;
  isLoading: boolean;
  success: boolean;
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  errorMessage: string | null;
}

export const initialState: TRegisterState = {
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
  user: null,
  accessToken: null,
  refreshToken: null,
  errorMessage: null,
}

export const createRegisterReducer = (state = initialState, action: TRegisterActions): TRegisterState => {
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
        user: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
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
