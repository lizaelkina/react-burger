import {Middleware, MiddlewareAPI} from 'redux';
import {AppDispatch, RootState, TApplicationActions} from '../store';
import {api} from '../../utils/api';
import {getAccessToken, setAccessToken, setRefreshToken} from '../../utils/token-store';

export interface IWSConnectAction {
  url: string;
  secure?: boolean;
}

export interface IWSErrorAction {
  error: string;
}

export interface IWSMessageAction<T> {
  data: T;
}

export interface IWSTypeActions {
  wsConnect: string;
  wsDisconnect: string;
  onOpen: string;
  onClose: string;
  onMessage: string;
  onError: string;
}

export const socketMiddleware = (wsTypeActions: IWSTypeActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    let secure = false;
    let wsUrl = '';
    let reconnectTimer: number = 0;
    let isConnected: boolean = false;

    return next => (action: TApplicationActions) => {
      const {dispatch} = store;
      const {type} = action;

      if (type === wsTypeActions.wsConnect) {
        const initAction = action as IWSConnectAction;
        const url = initAction.url + (initAction.secure ? `?token=${getAccessToken()}` : '');
        secure = initAction.secure ?? false;
        wsUrl = initAction.url ?? '';
        socket = new WebSocket(url);
        isConnected = true;
      }

      if (socket) {
        socket.onopen = () => {
          dispatch({type: wsTypeActions.onOpen} as TApplicationActions);
        };

        socket.onmessage = event => {
          const {data} = event;
          const parsedData = JSON.parse(data);
          if (secure && parsedData.message === 'Invalid or missing token') {
            api.refreshToken()
                .then(response => {
                  setRefreshToken(response.refreshToken);
                  setAccessToken(response.accessToken);
                  dispatch({type: wsTypeActions.wsConnect, url: wsUrl, secure: secure} as TApplicationActions);
                })
                .catch((error) => {
                  dispatch({type: wsTypeActions.onError, error: error.message.toString()} as TApplicationActions)
                })
          }
          dispatch({type: wsTypeActions.onMessage, data: parsedData} as TApplicationActions);
        };

        socket.onerror = event => {
          dispatch({type: wsTypeActions.onError, error: event} as TApplicationActions);
        };

        socket.onclose = event => {
          if (event.code !== 1000) {
            dispatch({type: wsTypeActions.onError, error: event.code.toString()} as TApplicationActions);
          }

          if (isConnected && event.code !== 1000) {
            reconnectTimer = window.setTimeout(() => {
              dispatch({type: wsTypeActions.wsConnect, url: wsUrl, secure: secure} as TApplicationActions);
            }, 3000)
          }
        };
      }
      if (type === wsTypeActions.wsDisconnect && socket) {
        clearTimeout(reconnectTimer);
        isConnected = false;
        reconnectTimer = 0;
        socket.close(1000, 'Работа закончена');
        dispatch({type: wsTypeActions.onClose} as TApplicationActions);
      }

      next(action);
    }
  }) as Middleware
}
