import {createForgotPasswordReducer, initialState} from './forgot-password';
import {
  changeEmail,
  FORGOTPASSWORD_FAILED,
  FORGOTPASSWORD_LOADING,
  FORGOTPASSWORD_SUCCESS
} from '../../actions/forgot-password';

describe('check forgot-password reducer', () => {
  it('should return initial state', () => {
    expect(createForgotPasswordReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should return loading state', () => {
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

  it('should return success state', () => {
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

  it('should return failed state', () => {
    const testError = 'testError';
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

  it('should return change email state', () => {
    expect(
        createForgotPasswordReducer(
            initialState,
            changeEmail('test@mail.ru', true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        email: 'test@mail.ru',
      },
      formValidity: {
        email: true,
      },
    });
  });

});
