export const WS_USER_ORDERS_CONNECTION_START: 'WS_USER_ORDERS_CONNECTION_START' = 'WS_USER_ORDERS_CONNECTION_START';
export const WS_USER_ORDERS_CONNECTION_SUCCESS: 'WS_USER_ORDERS_CONNECTION_SUCCESS' = 'WS_USER_ORDERS_CONNECTION_SUCCESS';
export const WS_USER_ORDERS_CONNECTION_ERROR: 'WS_USER_ORDERS_CONNECTION_ERROR' = 'WS_USER_ORDERS_CONNECTION_ERROR';
export const WS_USER_ORDERS_CONNECTION_CLOSED: 'WS_USER_ORDERS_CONNECTION_CLOSED' = 'WS_USER_ORDERS_CONNECTION_CLOSED';
export const WS_USER_ORDERS_GET_MESSAGE: 'WS_USER_ORDERS_GET_MESSAGE' = 'WS_USER_ORDERS_GET_MESSAGE';
export const WS_USER_ORDERS_SEND_MESSAGE: 'WS_USER_ORDERS_SEND_MESSAGE' = 'WS_USER_ORDERS_SEND_MESSAGE';

export interface IWSUserOrdersConnectionStart {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_START;
}

export interface IWSUserOrdersConnectionSuccess {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_SUCCESS;
}

export interface IWSUserOrdersConnectionError {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_ERROR;
}

export interface IWSUserOrdersConnectionClosed {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_CLOSED;
}

export interface IWSUserOrdersGetMessage {
  readonly type: typeof WS_USER_ORDERS_GET_MESSAGE;
}

export interface IWSUserOrdersSendMessage {
  readonly type: typeof WS_USER_ORDERS_SEND_MESSAGE;
}

export type TWSUserOrdersActions =
    IWSUserOrdersConnectionStart
    | IWSUserOrdersConnectionSuccess
    | IWSUserOrdersConnectionError
    | IWSUserOrdersConnectionClosed
    | IWSUserOrdersGetMessage
    | IWSUserOrdersSendMessage;
