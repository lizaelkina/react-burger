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

  it('should handle profile init action', () => {
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

  it('should handle loading action', () => {
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

  it('should handle success action', () => {
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

  it('should handle failed action', () => {
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

  it('should handle cancel changes action', () => {
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

  it('should handle change name action', () => {
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

  it('should handle change email action', () => {
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

  it('should handle change password action', () => {
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
