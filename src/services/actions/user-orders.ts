import {IWSConnectAction, IWSErrorAction, IWSMessageAction, IWSTypeActions} from '../middleware/socket-middleware';
import {IOrderList} from '../../utils/data-types';

export const WS_USER_ORDERS_CONNECT: 'WS_USER_ORDERS_CONNECT' = 'WS_USER_ORDERS_CONNECT';
export const WS_USER_ORDERS_OPEN: 'WS_USER_ORDERS_OPEN' = 'WS_USER_ORDERS_OPEN';
export const WS_USER_ORDERS_CLOSE: 'WS_USER_ORDERS_CLOSE' = 'WS_USER_ORDERS_CLOSE';
export const WS_USER_ORDERS_MESSAGE: 'WS_USER_ORDERS_MESSAGE' = 'WS_USER_ORDERS_MESSAGE';
export const WS_USER_ORDERS_ERROR: 'WS_USER_ORDERS_ERROR' = 'WS_USER_ORDERS_ERROR';

export interface IWSUserOrdersConnect extends IWSConnectAction {
  readonly type: typeof WS_USER_ORDERS_CONNECT;
}

export interface IWSUserOrdersOpen {
  readonly type: typeof WS_USER_ORDERS_OPEN;
}

export interface IWSUserOrdersClose {
  readonly type: typeof WS_USER_ORDERS_CLOSE;
}

export interface IWSUserOrdersMessage extends IWSMessageAction<IOrderList> {
  readonly type: typeof WS_USER_ORDERS_MESSAGE;
}

export interface IWSUserOrdersError extends IWSErrorAction {
  readonly type: typeof WS_USER_ORDERS_ERROR;
}

export const wsUserOrdersTypeActions: IWSTypeActions = {
  wsConnect: WS_USER_ORDERS_CONNECT,
  onOpen: WS_USER_ORDERS_OPEN,
  onClose: WS_USER_ORDERS_CLOSE,
  onMessage: WS_USER_ORDERS_MESSAGE,
  onError: WS_USER_ORDERS_ERROR,
}

export type TWSUserOrdersActions =
    IWSUserOrdersConnect
    | IWSUserOrdersOpen
    | IWSUserOrdersError
    | IWSUserOrdersClose
    | IWSUserOrdersMessage;

export const wsUserOrdersConnect = (url: string, secure: boolean): IWSUserOrdersConnect => {
  return {
    type: WS_USER_ORDERS_CONNECT,
    url: url,
    secure: secure,
  }
}

export const wsUserOrdersDisconnect = () => {
  return {
    type: WS_USER_ORDERS_CLOSE,
  }
}
