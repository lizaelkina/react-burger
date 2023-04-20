export const WS_ORDERS_CONNECTION_START: 'WS_ORDERS_CONNECTION_START' = 'WS_ORDERS_CONNECTION_START';
export const WS_ORDERS_CONNECTION_SUCCESS: 'WS_ORDERS_CONNECTION_SUCCESS' = 'WS_ORDERS_CONNECTION_SUCCESS';
export const WS_ORDERS_CONNECTION_ERROR: 'WS_ORDERS_CONNECTION_ERROR' = 'WS_ORDERS_CONNECTION_ERROR';
export const WS_ORDERS_CONNECTION_CLOSED: 'WS_ORDERS_CONNECTION_CLOSED' = 'WS_ORDERS_CONNECTION_CLOSED';
export const WS_ORDERS_GET_MESSAGE: 'WS_ORDERS_GET_MESSAGE' = 'WS_ORDERS_GET_MESSAGE';
export const WS_ORDERS_SEND_MESSAGE: 'WS_ORDERS_SEND_MESSAGE' = 'WS_ORDERS_SEND_MESSAGE';

export interface IWSOrdersConnectionStart {
  readonly type: typeof WS_ORDERS_CONNECTION_START;
}

export interface IWSOrdersConnectionSuccess {
  readonly type: typeof WS_ORDERS_CONNECTION_SUCCESS;
}

export interface IWSOrdersConnectionError {
  readonly type: typeof WS_ORDERS_CONNECTION_ERROR;
}

export interface IWSOrdersConnectionClosed {
  readonly type: typeof WS_ORDERS_CONNECTION_CLOSED;
}

export interface IWSOrdersGetMessage {
  readonly type: typeof WS_ORDERS_GET_MESSAGE;
}

export interface IWSOrdersSendMessage {
  readonly type: typeof WS_ORDERS_SEND_MESSAGE;
}

export type TWSOrdersActions =
    IWSOrdersConnectionStart
    | IWSOrdersConnectionSuccess
    | IWSOrdersConnectionError
    | IWSOrdersConnectionClosed
    | IWSOrdersGetMessage
    | IWSOrdersSendMessage;
