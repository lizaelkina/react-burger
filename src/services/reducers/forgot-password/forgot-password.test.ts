import {createForgotPasswordReducer, initialState} from './forgot-password';
import {
  changeEmail,
  FORGOTPASSWORD_FAILED,
  FORGOTPASSWORD_LOADING,
  FORGOTPASSWORD_SUCCESS
} from '../../actions/forgot-password';
import {testEmail, testError} from '../../../utils/data-test';

describe('check forgot-password reducer', () => {
  it('should return initial state', () => {
    expect(createForgotPasswordReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle loading action', () => {
    expect(
        createForgotPasswordReducer(
            initialState,
            {
              type: FORGOTPASSWORD_LOADING,
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
        createForgotPasswordReducer(
            initialState,
            {
              type: FORGOTPASSWORD_SUCCESS,
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
        createForgotPasswordReducer(
            initialState,
            {
              type: FORGOTPASSWORD_FAILED,
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
        createForgotPasswordReducer(
            initialState,
            changeEmail(testEmail, true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        email: testEmail,
      },
      formValidity: {
        email: true,
      },
    });
  });

});
