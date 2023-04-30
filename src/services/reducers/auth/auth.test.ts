import {createAuthReducer, initialState} from './auth';
import {
  authUser,
  CHECK_USER_FAILED,
  CHECK_USER_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS
} from '../../actions/auth';
import {IUser} from '../../../utils/data-types';

const testUser: IUser = {
  email: 'email',
  name: 'name',
  password: '123456',
};

describe('check auth reducer', () => {
  it('should return initial state', () => {
    expect(createAuthReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle auth user action', () => {
    expect(
        createAuthReducer(
            initialState,
            authUser(
                testUser,
                'accessTokenTest',
                'refreshTokenTest'
            )
        )
    ).toEqual({
      ...initialState,
      user: testUser,
      isAuthChecked: true,
    });
  });

  it('should handle check user success action', () => {
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

  it('should handle check user failed action', () => {
    expect(
        createAuthReducer(
            initialState,
            {
              type: CHECK_USER_FAILED,
              error: 'testError',
            }
        )
    ).toEqual({
      ...initialState,
      user: null,
      isAuthChecked: true,
    });
  });

  it('should handle logout loading action', () => {
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

  it('should handle logout success action', () => {
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

  it('should handle logout failed action', () => {
    expect(
        createAuthReducer(
            initialState,
            {
              type: LOGOUT_FAILED,
              error: 'testError',
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
