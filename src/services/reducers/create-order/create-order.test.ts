import {createOrderReducer, initialState} from './create-order';
import {
  closeOrderModal,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_LOADING,
  CREATE_ORDER_SUCCESS
} from '../../actions/create-order';

describe('check create-order reducer', () => {
  it('should return initial state', () => {
    expect(createOrderReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle loading action', () => {
    expect(
        createOrderReducer(
            initialState,
            {
              type: CREATE_ORDER_LOADING,
            }
        )
    ).toEqual({
      ...initialState,
      isOpenModal: true,
      isLoading: true,
      success: false,
      number: null,
      errorMessage: null,
    });
  });

  it('should handle success action', () => {
    expect(
        createOrderReducer(
            initialState,
            {
              type: CREATE_ORDER_SUCCESS,
              number: 1,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      success: true,
      number: 1,
    });
  });

  it('should handle failed action', () => {
    expect(
        createOrderReducer(
            initialState,
            {
              type: CREATE_ORDER_FAILED,
              error: 'testError',
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      errorMessage: 'testError',
    });
  });

  it('should handle close modal action', () => {
    expect(
        createOrderReducer(
            initialState,
            closeOrderModal()
        )
    ).toEqual({
      ...initialState,
      isOpenModal: false,
    });
  });

});
