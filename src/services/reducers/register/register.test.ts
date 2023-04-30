import {createRegisterReducer, initialState} from './register';
import {
  changeEmail,
  changeName,
  changePassword,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS
} from '../../actions/register';
import {IUser} from '../../../utils/data-types';

const testUser: IUser = {
  email: 'email',
  name: 'name',
  password: '123456',
};

describe('check register reducer', () => {
  it('should return initial state', () => {
    expect(createRegisterReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should return loading state', () => {
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

  it('should return success state', () => {
    expect(
        createRegisterReducer(
            initialState,
            {
              type: REGISTER_SUCCESS,
              user: testUser,
              accessToken: 'accessTokenTest',
              refreshToken: 'refreshTokenTest',
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      success: true,
      user: testUser,
      accessToken: 'accessTokenTest',
      refreshToken: 'refreshTokenTest',
    });
  });

  it('should return failed state', () => {
    expect(
        createRegisterReducer(
            initialState,
            {
              type: REGISTER_FAILED,
              error: 'testError',
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      errorMessage: 'testError',
    });
  });

  it('should return change name state', () => {
    expect(
        createRegisterReducer(
            initialState,
            changeName('newName', true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        name: 'newName',
      },
      formValidity: {
        ...initialState.formValidity,
        name: true,
      },
      errorMessage: null,
    });
  });

  it('should return change email state', () => {
    expect(
        createRegisterReducer(
            initialState,
            changeEmail('newEmail', true)
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.formData,
        email: 'newEmail',
      },
      formValidity: {
        ...initialState.formValidity,
        email: true,
      },
      errorMessage: null,
    });
  });

  it('should return change password state', () => {
    expect(
        createRegisterReducer(
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

});
