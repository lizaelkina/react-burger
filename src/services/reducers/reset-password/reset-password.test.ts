import {createResetPasswordReducer, initialState} from './reset-password';
import {
  changeCode,
  changePassword,
  RESETPASSWORD_FAILED,
  RESETPASSWORD_LOADING,
  RESETPASSWORD_SUCCESS
} from '../../actions/reset-password';
import {newTestPassword, testError, testRefreshToken} from '../../../utils/data-test';

describe('check reset-password reducer', () => {
  it('should return initial state', () => {
    expect(createResetPasswordReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle loading action', () => {
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

  it('should handle success action', () => {
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

  it('should handle failed action', () => {
    expect(
        createResetPasswordReducer(
            initialState,
            {
              type: RESETPASSWORD_FAILED,
              error: testError,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      errorMessage: testError,
    });
  });

  it('should handle change password action', () => {
    expect(
        createResetPasswordReducer(
            initialState,
            changePassword(newTestPassword, true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        password: newTestPassword,
      },
      formValidity: {
        ...initialState.formValidity,
        password: true,
      },
      errorMessage: null,
    });
  });

  it('should handle change code action', () => {
    expect(
        createResetPasswordReducer(
            initialState,
            changeCode(testRefreshToken, true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        token: testRefreshToken,
      },
      formValidity: {
        ...initialState.formValidity,
        token: true,
      },
      errorMessage: null,
    });
  });

});
