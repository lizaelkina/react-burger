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

  it('should return loading state', () => {
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

  it('should return success state', () => {
    const testNumber = 1;
    expect(
        createOrderReducer(
            initialState,
            {
              type: CREATE_ORDER_SUCCESS,
              number: testNumber,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      success: true,
      number: testNumber,
    });
  });

  it('should return failed state', () => {
    const testError = 'testError';
    expect(
        createOrderReducer(
            initialState,
            {
              type: CREATE_ORDER_FAILED,
              error: testError,
            }
        )
    ).toEqual({
      ...initialState,
      isLoading: false,
      errorMessage: testError,
    });
  });

  it('should return close modal state', () => {
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
