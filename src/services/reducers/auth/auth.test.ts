import {createAuthReducer, initialState} from './auth';
import {
  AUTH_USER,
  CHECK_USER_FAILED,
  CHECK_USER_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS
} from '../../actions/auth';
import {IUser} from '../../../utils/data-types';

const testUser: IUser = {
  email: 'test@mail.ru',
  name: 'Тест',
  password: '123456',
};

const testError = 'testError';

describe('check auth reducer', () => {
  it('should return initial state', () => {
    expect(createAuthReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should return auth user state', () => {
    const accessTokenTest = 'accessTokenTest';
    const refreshTokenTest = 'refreshTokenTest';
    expect(
        createAuthReducer(
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
      user: testUser,
      isAuthChecked: true,
    });
  });

  it('should return check user success state', () => {
    expect(
        createAuthReducer(
            initialState,
            {
              type: CHECK_USER_SUCCESS,
              user: testUser,
            }
        )
    ).toEqual({
      ...initialState,
      user: testUser,
      isAuthChecked: true,
    });
  });

  it('should return check user failed state', () => {
    expect(
        createAuthReducer(
            initialState,
            {
              type: CHECK_USER_FAILED,
              error: testError,
            }
        )
    ).toEqual({
      ...initialState,
      user: null,
      isAuthChecked: true,
    });
  });

  it('should return logout loading state', () => {
    expect(
        createAuthReducer(
            initialState,
            {
              type: LOGOUT_LOADING,
            }
        )
    ).toEqual({
      ...initialState,
      isLogoutLoading: true,
    });
  });

  it('should return logout success state', () => {
    expect(
        createAuthReducer(
            initialState,
            {
              type: LOGOUT_SUCCESS,
            }
        )
    ).toEqual({
      ...initialState,
      isLogoutLoading: false,
      user: null,
      isAuthChecked: false,
    });
  });

  it('should return logout failed state', () => {
    expect(
        createAuthReducer(
            initialState,
            {
              type: LOGOUT_FAILED,
              error: testError,
            }
        )
    ).toEqual({
      ...initialState,
      isLogoutLoading: false,
      user: null,
      isAuthChecked: false,
    });
  });

});
