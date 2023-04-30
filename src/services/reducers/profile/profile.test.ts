import {initialState, profileReducer} from './profile';
import {
  cancelChanges,
  changeEmail,
  changeName,
  changePassword,
  PROFILE_FAILED,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
  profileInitState
} from '../../actions/profile';
import {IUser} from '../../../utils/data-types';

const testUser: IUser = {
  email: 'email',
  name: 'name',
  password: '123456',
};

describe('check profile reducer', () => {
  it('should return initial state', () => {
    expect(profileReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should return profile init state', () => {
    expect(
        profileReducer(
            initialState,
            profileInitState(testUser)
        )
    ).toEqual({
      ...initialState,
      formData: testUser,
      initData: testUser,
    });
  });

  it('should return loading state', () => {
    expect(
        profileReducer(
            initialState,
            {
              type: PROFILE_LOADING,
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
        profileReducer(
            initialState,
            {
              type: PROFILE_SUCCESS,
              user: testUser,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      success: true,
      formDataChanged: false,
      initData: testUser,
    })
  });

  it('should return failed state', () => {
    expect(
        profileReducer(
            initialState,
            {
              type: PROFILE_FAILED,
              error: 'testError',
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      errorMessage: 'testError',
    })
  });

  it('should return cancel changes state', () => {
    expect(
        profileReducer(
            initialState,
            cancelChanges()
        )
    ).toEqual({
      ...initialState,
      formData: {
        ...initialState.initData,
      },
      formDataChanged: false,
      errorMessage: null,
    });
  });

  it('should return change name state', () => {
    expect(
        profileReducer(
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
      formDataChanged: true,
      errorMessage: null,
    });
  });

  it('should return change email state', () => {
    expect(
        profileReducer(
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
      formDataChanged: true,
      errorMessage: null,
    });
  });

  it('should return change password state', () => {
    expect(
        profileReducer(
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
      formDataChanged: true,
      errorMessage: null,
    });
  });

});
