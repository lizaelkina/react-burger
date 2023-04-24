import {IWSConnectAction, IWSErrorAction, IWSMessageAction, IWSTypeActions} from '../middleware/socket-middleware';
import {IOrderList} from '../../utils/data-types';

export const WS_ORDERS_CONNECT: 'WS_ORDERS_CONNECT' = 'WS_ORDERS_CONNECT';
export const WS_ORDERS_DISCONNECT: 'WS_ORDERS_DISCONNECT' = 'WS_ORDERS_DISCONNECT';
export const WS_ORDERS_OPEN: 'WS_ORDERS_OPEN' = 'WS_ORDERS_OPEN';
export const WS_ORDERS_CLOSE: 'WS_ORDERS_CLOSE' = 'WS_ORDERS_CLOSE';
export const WS_ORDERS_MESSAGE: 'WS_ORDERS_MESSAGE' = 'WS_ORDERS_MESSAGE';
export const WS_ORDERS_ERROR: 'WS_ORDERS_ERROR' = 'WS_ORDERS_ERROR';

export interface IWSOrdersConnect extends IWSConnectAction {
  readonly type: typeof WS_ORDERS_CONNECT;
}

export interface IWSOrdersDisconnect {
  readonly type: typeof WS_ORDERS_DISCONNECT;
}

export interface IWSOrdersOpen {
  readonly type: typeof WS_ORDERS_OPEN;
}

export interface IWSOrdersClose {
  readonly type: typeof WS_ORDERS_CLOSE;
}

export interface IWSOrdersMessage extends IWSMessageAction<IOrderList> {
  readonly type: typeof WS_ORDERS_MESSAGE;
}

export interface IWSOrdersError extends IWSErrorAction {
  readonly type: typeof WS_ORDERS_ERROR;
}

export const wsOrdersTypeActions: IWSTypeActions = {
  wsConnect: WS_ORDERS_CONNECT,
  wsDisconnect: WS_ORDERS_DISCONNECT,
  onOpen: WS_ORDERS_OPEN,
  onClose: WS_ORDERS_CLOSE,
  onMessage: WS_ORDERS_MESSAGE,
  onError: WS_ORDERS_ERROR
}

export type TWSOrdersActions =
    IWSOrdersConnect
    | IWSOrdersDisconnect
    | IWSOrdersOpen
    | IWSOrdersError
    | IWSOrdersClose
    | IWSOrdersMessage;

export const wsOrdersConnect = (url: string): IWSOrdersConnect => {
  return {
    type: WS_ORDERS_CONNECT,
    url: url,
  }
}

export const wsOrdersDisconnect = () => {
  return {
    type: WS_ORDERS_DISCONNECT,
  }
}
