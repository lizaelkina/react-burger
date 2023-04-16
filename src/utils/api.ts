import {getAccessToken, getRefreshToken, setAccessToken, setRefreshToken} from './token-store';
import {IIngredient, IOrder, IUser} from './data-types';

const API_URL = 'https://norma.nomoreparties.space/api';
const DEFAULT_HEADER = {
  "Content-Type": "application/json",
};

interface IResponse {
  success: boolean;
}

interface IGetIngredientsResponse extends IResponse {
  data: Array<IIngredient>;
}

interface ICreateOrderResponse extends IResponse {
  order: IOrder;
}

interface IGetUserResponse extends IResponse {
  user: IUser;
}

interface IRefreshTokenResponse extends IResponse {
  accessToken: string;
  refreshToken: string;
}

interface IRegisterResponse extends IResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

interface ILoginResponse extends IResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

interface IForgotPasswordResponse extends IResponse {
  message: string;
}

interface IResetPasswordResponse extends IResponse {
  message: string;
}

interface IUpdateProfileResponse extends IResponse {
  user: IUser;
}

interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
}

class RegisterFormData implements IRegisterFormData {
  email: string;
  name: string;
  password: string;

  constructor(email: string, name: string, password: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }
}

interface ILoginFormData {
  email: string;
  password: string;
}

class LoginFormData implements ILoginFormData {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

interface IForgotPasswordFormData {
  email: string;
}

class ForgotPasswordFormData {
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}

interface IResetPasswordFormData {
  password: string;
  token: string;
}

class ResetPasswordFormData implements IResetPasswordFormData {
  password: string;
  token: string;

  constructor(password: string, token: string) {
    this.password = password;
    this.token = token;
  }
}

interface IUpdateProfileFormData {
  name: string;
  email: string;
  password: string;
}

class UpdateProfileFormData implements IUpdateProfileFormData {
  email: string;
  name: string;
  password: string;

  constructor(email: string, name: string, password: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }
}


const getHeadersWithToken = () => ({
  ...DEFAULT_HEADER,
  authorization: getAccessToken(),
});

const request = <R extends IResponse>(endpoint: string, options?: any): Promise<R> => {
  return fetch(`${API_URL}/${endpoint}`, options)
      .then(async response => {
        try {
          const json = await response.json();
          if (response.ok && json.success) {
            return Promise.resolve(json);
          }
          return Promise.reject({error: json?.message, statusCode: response.status});
        } catch (error) {
          return Promise.reject({error: `Ошибка: ${response.status}`});
        }
      })
}

const requestWithRefresh = async <R extends IResponse>(endpoint: string, options?: any): Promise<R> => {
  try {
    return Promise.resolve(await request(endpoint, options));
  } catch (error: any) {
    if (error.statusCode === 401 || error.statusCode === 403) {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        await Promise.reject(refreshData);
      }
      setAccessToken(refreshData.accessToken);
      setRefreshToken(refreshData.refreshToken);
      options.headers.authorization = refreshData.accessToken;
      return request(endpoint, options);
    } else {
      return await Promise.reject(error);
    }
  }
}

export const getIngredients = (): Promise<IGetIngredientsResponse> => request('ingredients');

export const createOrder = (ingredientIdList: Array<string>): Promise<ICreateOrderResponse> => request('orders',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify({
        ingredients: ingredientIdList,
      })
    });

export const getUser = (): Promise<IGetUserResponse> => requestWithRefresh('auth/user', {
  headers: getHeadersWithToken(),
});

export const registerRequest = (formData: IRegisterFormData): Promise<IRegisterResponse> => request('auth/register',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    });

export const loginRequest = (formData: ILoginFormData): Promise<ILoginResponse> => request('auth/login',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    });

export const forgotPasswordRequest = (formData: IForgotPasswordFormData): Promise<IForgotPasswordResponse> => request('password-reset',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    });

export const resetPasswordRequest = (formData: IResetPasswordFormData): Promise<IResetPasswordResponse> => request('password-reset/reset',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify(formData),
    });

export const updateProfileRequest = (formData: IUpdateProfileFormData): Promise<IUpdateProfileResponse> => requestWithRefresh('auth/user',
    {
      method: 'PATCH',
      headers: getHeadersWithToken(),
      body: JSON.stringify(formData),
    });

export const refreshToken = (): Promise<IRefreshTokenResponse> => request('auth/token',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify({
        token: getRefreshToken(),
      }),
    });

export const logoutRequest = () => request('auth/logout',
    {
      method: 'POST',
      headers: DEFAULT_HEADER,
      body: JSON.stringify({
        token: getRefreshToken(),
      }),
    });
