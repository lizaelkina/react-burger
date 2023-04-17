import {getAccessToken, getRefreshToken, setAccessToken, setRefreshToken} from './token-store';
import {IIngredient, IOrder, IUser} from './data-types';

type ApiConfig = {
  baseUrl: string;
  defaultHeaders: { [key: string]: string };
}

const config: ApiConfig = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  defaultHeaders: {
    "Content-Type": "application/json",
  }
}

class Api {
  private readonly _baseUrl: string;
  private readonly _defaultHeaders: { [key: string]: string };

  constructor({baseUrl, defaultHeaders}: ApiConfig) {
    this._baseUrl = baseUrl;
    this._defaultHeaders = defaultHeaders;
  }

  getIngredients(): Promise<IGetIngredientsResponse> {
    return this.request('ingredients');
  }

  createOrder(ingredientIdList: Array<string>): Promise<ICreateOrderResponse> {
    return this.request('orders',
        {
          method: 'POST',
          headers: this._defaultHeaders,
          body: JSON.stringify({
            ingredients: ingredientIdList,
          })
        });
  }

  getUser(): Promise<IGetUserResponse> {
    return this.requestWithRefresh('auth/user', {
      headers: this.getHeadersWithToken(),
    })
  }

  login(formData: ILoginFormData): Promise<ILoginResponse> {
    return this.request('auth/login',
        {
          method: 'POST',
          headers: this._defaultHeaders,
          body: JSON.stringify(formData),
        });
  }

  logout(): Promise<IResponse> {
    return this.request('auth/logout',
        {
          method: 'POST',
          headers: this._defaultHeaders,
          body: JSON.stringify({
            token: getRefreshToken(),
          }),
        });
  }

  register(formData: IRegisterFormData): Promise<IRegisterResponse> {
    return this.request('auth/register',
        {
          method: 'POST',
          headers: this._defaultHeaders,
          body: JSON.stringify(formData),
        });
  }

  forgotPassword(formData: IForgotPasswordFormData): Promise<IForgotPasswordResponse> {
    return this.request('password-reset',
        {
          method: 'POST',
          headers: this._defaultHeaders,
          body: JSON.stringify(formData),
        });
  }

  resetPassword(formData: IResetPasswordFormData): Promise<IResetPasswordResponse> {
    return this.request('password-reset/reset',
        {
          method: 'POST',
          headers: this._defaultHeaders,
          body: JSON.stringify(formData),
        });
  }

  updateProfile(formData: IUpdateProfileFormData): Promise<IUpdateProfileResponse> {
    return this.requestWithRefresh('auth/user',
        {
          method: 'PATCH',
          headers: this.getHeadersWithToken(),
          body: JSON.stringify(formData),
        });
  }

  private refreshToken(): Promise<IRefreshTokenResponse> {
    return this.request('auth/token',
        {
          method: 'POST',
          headers: this._defaultHeaders,
          body: JSON.stringify({
            token: getRefreshToken(),
          }),
        });
  }

  private request<R extends IResponse>(endpoint: string, options?: RequestInit): Promise<R> {
    return fetch(`${this._baseUrl}/${endpoint}`, options)
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

  private async requestWithRefresh<R extends IResponse>(endpoint: string, options?: any): Promise<R> {
    try {
      return Promise.resolve(await this.request(endpoint, options));
    } catch (error: any) {
      if (error.statusCode === 401 || error.statusCode === 403) {
        const refreshData = await this.refreshToken();
        if (!refreshData.success) {
          await Promise.reject(refreshData);
        }
        setAccessToken(refreshData.accessToken);
        setRefreshToken(refreshData.refreshToken);
        options.headers.authorization = refreshData.accessToken;
        return this.request(endpoint, options);
      } else {
        return await Promise.reject(error);
      }
    }
  }

  private getHeadersWithToken() {
    return {
      ...this._defaultHeaders,
      authorization: getAccessToken(),
    };
  }
}

export const api = new Api(config);

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

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
}

// class RegisterFormData implements IRegisterFormData {
//   email: string;
//   name: string;
//   password: string;
//
//   constructor(email: string, name: string, password: string) {
//     this.email = email;
//     this.name = name;
//     this.password = password;
//   }
// }

export interface ILoginFormData {
  email: string;
  password: string;
}

// class LoginFormData implements ILoginFormData {
//   email: string;
//   password: string;
//
//   constructor(email: string, password: string) {
//     this.email = email;
//     this.password = password;
//   }
// }

export interface IForgotPasswordFormData {
  email: string;
}

// class ForgotPasswordFormData {
//   email: string;
//
//   constructor(email: string) {
//     this.email = email;
//   }
// }

export interface IResetPasswordFormData {
  password: string;
  token: string;
}

// class ResetPasswordFormData implements IResetPasswordFormData {
//   password: string;
//   token: string;
//
//   constructor(password: string, token: string) {
//     this.password = password;
//     this.token = token;
//   }
// }

export interface IUpdateProfileFormData {
  name: string;
  email: string;
  password: string;
}

// class UpdateProfileFormData implements IUpdateProfileFormData {
//   email: string;
//   name: string;
//   password: string;
//
//   constructor(email: string, name: string, password: string) {
//     this.email = email;
//     this.name = name;
//     this.password = password;
//   }
// }
