import {createRegisterReducer, initialState} from './register';
import {
  changeEmail,
  changeName,
  changePassword,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS
} from '../../actions/register';
import {
  testAccessToken,
  testEmail,
  testError,
  testName,
  testPassword,
  testRefreshToken,
  testUser
} from '../../../utils/data-test';

describe('check register reducer', () => {
  it('should return initial state', () => {
    expect(createRegisterReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle loading action', () => {
    expect(
        createRegisterReducer(
            initialState,
            {
              type: REGISTER_LOADING,
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
        createRegisterReducer(
            initialState,
            {
              type: REGISTER_SUCCESS,
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
        createRegisterReducer(
            initialState,
            {
              type: REGISTER_FAILED,
              error: testError,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      errorMessage: testError,
    });
  });

  it('should handle change name action', () => {
    expect(
        createRegisterReducer(
            initialState,
            changeName(testName, true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        name: testName,
      },
      formValidity: {
        ...initialState.formValidity,
        name: true,
      },
      errorMessage: null,
    });
  });

  it('should handle change email action', () => {
    expect(
        createRegisterReducer(
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
      errorMessage: null,
    });
  });

  it('should handle change password action', () => {
    expect(
        createRegisterReducer(
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
