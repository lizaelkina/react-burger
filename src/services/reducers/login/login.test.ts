import {createLoginReducer, initialState} from './login';
import {changeEmail, changePassword, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS} from '../../actions/login';
import {AUTH_USER} from '../../actions/auth';
import {
  testAccessToken,
  testEmail,
  testError,
  testPassword,
  testRefreshToken,
  testUser
} from '../../../utils/data-test';

describe('check login reducer', () => {
  it('should return initial state', () => {
    expect(createLoginReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle check auth user action', () => {
    expect(
        createLoginReducer(
            initialState,
            {
              type: AUTH_USER,
              user: testUser,
              accessToken: testAccessToken,
              refreshToken: testRefreshToken,
            }
        )
    ).toEqual({
      ...initialState,
      success: false,
    });
  });

  it('should handle loading action', () => {
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

  it('should handle success action', () => {
    expect(
        createLoginReducer(
            initialState,
            {
              type: LOGIN_SUCCESS,
              user: testUser,
              accessToken: testAccessToken,
              refreshToken: testRefreshToken,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      success: true,
      user: testUser,
      accessToken: testAccessToken,
      refreshToken: testRefreshToken,
    });
  });

  it('should handle failed action', () => {
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

  it('should handle change email action', () => {
    expect(
        createLoginReducer(
            initialState,
            changeEmail(testEmail, true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        email: testEmail,
      },
      formValidity: {
        ...initialState.formValidity,
        email: true,
      },
    });
  });

  it('should handle change password action', () => {
    expect(
        createLoginReducer(
            initialState,
            changePassword(testPassword, true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        password: testPassword,
      },
      formValidity: {
        ...initialState.formValidity,
        password: true,
      },
      errorMessage: null,
    });
  });

});
