import {createResetPasswordReducer, initialState} from './reset-password';
import {
  changeCode,
  changePassword,
  RESETPASSWORD_FAILED,
  RESETPASSWORD_LOADING,
  RESETPASSWORD_SUCCESS
} from '../../actions/reset-password';

describe('check reset-password reducer', () => {
  it('should return initial state', () => {
    expect(createResetPasswordReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should return loading state', () => {
    expect(
        createResetPasswordReducer(
            initialState,
            {
              type: RESETPASSWORD_LOADING,
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
        createResetPasswordReducer(
            initialState,
            {
              type: RESETPASSWORD_SUCCESS,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      success: true,
    });
  });

  it('should return failed state', () => {
    expect(
        createResetPasswordReducer(
            initialState,
            {
              type: RESETPASSWORD_FAILED,
              error: 'testError',
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      errorMessage: 'testError',
    });
  });

  it('should return change password state', () => {
    expect(
        createResetPasswordReducer(
            initialState,
            changePassword('newPassword', true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        password: 'newPassword',
      },
      formValidity: {
        ...initialState.formValidity,
        password: true,
      },
      errorMessage: null,
    });
  });

  it('should return change code state', () => {
    expect(
        createResetPasswordReducer(
            initialState,
            changeCode('newCode', true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        token: 'newCode',
      },
      formValidity: {
        ...initialState.formValidity,
        token: true,
      },
      errorMessage: null,
    });
  });

});
