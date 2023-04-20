export const WS_ORDERS_CONNECT: 'WS_ORDERS_CONNECT' = 'WS_ORDERS_CONNECT';
export const WS_ORDERS_OPEN: 'WS_ORDERS_OPEN' = 'WS_ORDERS_OPEN';
export const WS_ORDERS_CLOSE: 'WS_ORDERS_CLOSE' = 'WS_ORDERS_CLOSE';
export const WS_ORDERS_ERROR: 'WS_ORDERS_ERROR' = 'WS_ORDERS_ERROR';
export const WS_ORDERS_MESSAGE: 'WS_ORDERS_MESSAGE' = 'WS_ORDERS_MESSAGE';

export interface IWSOrdersConnectionStart {
  readonly type: typeof WS_ORDERS_CONNECT;
}

export interface IWSOrdersConnectionSuccess {
  readonly type: typeof WS_ORDERS_OPEN;
}

export interface IWSOrdersConnectionClosed {
  readonly type: typeof WS_ORDERS_CLOSE;
}

export interface IWSOrdersConnectionError {
  readonly type: typeof WS_ORDERS_ERROR;
}

export interface IWSOrdersGetMessage {
  readonly type: typeof WS_ORDERS_MESSAGE;
}

export type TWsOrdersActions =
    IWSOrdersConnectionStart
    | IWSOrdersConnectionSuccess
    | IWSOrdersConnectionError
    | IWSOrdersConnectionClosed
    | IWSOrdersGetMessage;
