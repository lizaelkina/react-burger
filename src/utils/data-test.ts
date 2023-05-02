import {IIngredient, IOrder, IOrderList, IUser} from './data-types';

export const testIngredientImage = 'https://code.s3.yandex.net/react/code/bun-02.png';
export const testLargeIngredientImage = 'https://code.s3.yandex.net/react/code/bun-02-large.png';

export function createTestIngredient(
    id: string,
    type: 'bun' | 'sauce' | 'main',
    options: any = {}): IIngredient {
  const ingredient = {
    _id: id,
    name: options?.name ?? 'Название ингредиента',
    type: type,
    proteins: options?.proteins ?? 90,
    fat: options?.fat ?? 80,
    carbohydrates: options?.carbohydrates ?? 70,
    calories: options?.calories ?? 100,
    price: options?.price ?? 1000,
    image: options?.image ?? testIngredientImage,
    image_mobile: 'image_mobile',
    image_large: testLargeIngredientImage,
  }
  return options?.uuid ? {
    ...ingredient,
    uuid: options.uuid,
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
