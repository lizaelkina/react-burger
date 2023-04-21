import {Middleware, MiddlewareAPI} from 'redux';
import {AppDispatch, RootState, TApplicationActions} from '../store';
import {getAccessToken} from '../../utils/token-store';

export interface IWSConnectAction {
  url: string;
  secure?: boolean;
}

export interface IWSErrorAction {
  event: Event;
}

export interface IWSMessageAction<T> {
  data: T;
}

export interface IWSTypeActions {
  wsConnect: string;
  onOpen: string;
  onClose: string;
  onMessage: string;
  onError: string;
}

export const socketMiddleware = (wsTypeActions: IWSTypeActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TApplicationActions) => {
      const {dispatch} = store;
      const {type} = action;

      if (type === wsTypeActions.wsConnect) {
        const initAction = action as IWSConnectAction;
        const url = initAction.url + (initAction.secure ? `?token=${getAccessToken()}` : '');
        socket = new WebSocket(url);
      }

      if (socket) {
        socket.onopen = () => {
          dispatch({type: wsTypeActions.onOpen} as TApplicationActions);
        };

        socket.onerror = event => {
          dispatch({type: wsTypeActions.onError, error: event} as TApplicationActions);
        };

        socket.onmessage = event => {
          const {data} = event;
          const parsedData = JSON.parse(data);
          dispatch({type: wsTypeActions.onMessage, data: parsedData} as TApplicationActions);
        };

        socket.onclose = event => {
          dispatch({type: wsTypeActions.onClose, event: event} as TApplicationActions);
        };
      }
      next(action);
    }
  }) as Middleware
}
