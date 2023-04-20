export const WS_USER_ORDERS_CONNECT: 'WS_USER_ORDERS_CONNECT' = 'WS_USER_ORDERS_CONNECT';
export const WS_USER_ORDERS_OPEN: 'WS_USER_ORDERS_OPEN' = 'WS_USER_ORDERS_OPEN';
export const WS_USER_ORDERS_CLOSE: 'WS_USER_ORDERS_CLOSE' = 'WS_USER_ORDERS_CLOSE';
export const WS_USER_ORDERS_ERROR: 'WS_USER_ORDERS_ERROR' = 'WS_USER_ORDERS_ERROR';
export const WS_USER_ORDERS_MESSAGE: 'WS_USER_ORDERS_MESSAGE' = 'WS_USER_ORDERS_MESSAGE';

export interface IWsUserOrdersConnect {
  readonly type: typeof WS_USER_ORDERS_CONNECT;
}

export interface IWsUserOrdersOpen {
  readonly type: typeof WS_USER_ORDERS_OPEN;
}

export interface IWsUserOrdersClose {
  readonly type: typeof WS_USER_ORDERS_CLOSE;
}

export interface IWsUserOrdersError {
  readonly type: typeof WS_USER_ORDERS_ERROR;
}

export interface IWsUserOrdersMessage {
  readonly type: typeof WS_USER_ORDERS_MESSAGE;
}

export type TWsUserOrdersActions =
    IWsUserOrdersConnect
    | IWsUserOrdersOpen
    | IWsUserOrdersError
    | IWsUserOrdersClose
    | IWsUserOrdersMessage;
