import {createLoginReducer, initialState} from './login';
import {changeEmail, changePassword, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS} from '../../actions/login';
import {IUser} from '../../../utils/data-types';
import {AUTH_USER} from '../../actions/auth';

const testUser: IUser = {
  email: 'test@mail.ru',
  name: 'Тест',
  password: '123456',
};

const accessTokenTest = 'accessTokenTest';
const refreshTokenTest = 'refreshTokenTest';

describe('check login reducer', () => {
  it('should return initial state', () => {
    expect(createLoginReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should check auth user', () => {
    expect(
        createLoginReducer(
            initialState,
            {
              type: AUTH_USER,
              user: testUser,
              accessToken: accessTokenTest,
              refreshToken: refreshTokenTest,
            }
        )
    ).toEqual({
      ...initialState,
      success: false,
    });
  });

  it('should return loading state', () => {
    expect(
        createLoginReducer(
            initialState,
            {
              type: LOGIN_LOADING,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: true,
      success: false,
      errorMessage: null,
    });
  });

  it('should return success state', () => {
    expect(
        createLoginReducer(
            initialState,
            {
              type: LOGIN_SUCCESS,
              user: testUser,
              accessToken: accessTokenTest,
              refreshToken: refreshTokenTest,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      success: true,
      user: testUser,
      accessToken: accessTokenTest,
      refreshToken: refreshTokenTest,
    });
  });

  it('should return failed state', () => {
    const testError = 'testError';
    expect(
        createLoginReducer(
            initialState,
            {
              type: LOGIN_FAILED,
              error: testError,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      errorMessage: testError,
    });
  });

  it('should return change email state', () => {
    expect(
        createLoginReducer(
            initialState,
            changeEmail('test@mail.ru', true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        email: 'test@mail.ru',
      },
      formValidity: {
        ...initialState.formValidity,
        email: true,
      },
    });
  });

  it('should return change password state', () => {
    expect(
        createLoginReducer(
            initialState,
            changePassword('123456', true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        password: '123456',
      },
      formValidity: {
        ...initialState.formValidity,
        password: true,
      },
      errorMessage: null,
    });
  });

});
