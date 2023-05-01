import {IIngredient, IOrder, IOrderList, IUser} from './data-types';

export function createTestIngredient(id: string, type: 'bun' | 'sauce' | 'main', uuid?: string): IIngredient {
  const ingredient = {
    _id: id,
    name: 'name',
    type: type,
    proteins: 10,
    fat: 10,
    carbohydrates: 10,
    calories: 100,
    price: 1000,
    image: 'image',
    image_mobile: 'image_mobile',
    image_large: 'image_large',
  }
  return uuid ? {
    ...ingredient,
    uuid: uuid,
  } : ingredient;
}

export function createOrder(id: string): IOrder {
  return {
    _id: id,
    ingredients: [],
    status: 'status',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    number: 1,
  };
}

export const testOrderList: IOrderList = {
  orders: [],
  success: false,
  total: 0,
  totalToday: 0,
};

export const testUser: IUser = {
  email: 'testEmail',
  name: 'testName',
  password: 'testPassword',
};

export const testEmail = 'testEmail';
export const testName = 'testName';
export const testPassword = 'testPassword';

export const newTestEmail = 'newTestEmail';
export const newTestName = 'newTestName';
export const newTestPassword = 'newTestPassword';

export const testAccessToken = 'testAccessToken';
export const testRefreshToken = 'testRefreshToken';

export const testError = 'testError';

export const testUrl = 'testUrl';
