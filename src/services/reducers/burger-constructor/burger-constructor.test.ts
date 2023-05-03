import {burgerConstructorReducer, initialState} from './burger-constructor';
import {addIngredient, clearIngredients, deleteIngredient, moveIngredient} from '../../actions/burger-constructor';
import {createTestIngredient} from '../../../utils/data-test';

describe('check burger-constructor reducer', () => {
  it('should return initial state', () => {
    expect(burgerConstructorReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle add ingredient (bun) action when initial state', () => {
    expect(
        burgerConstructorReducer(
            initialState,
            addIngredient(createTestIngredient('1', 'bun'))
        )
    ).toEqual({
      bun: expect.objectContaining(createTestIngredient('1', 'bun')),
      middle: [],
    });
  });

  it('should handle add ingredient (bun) action when state has bun', () => {
    expect(
        burgerConstructorReducer(
            {
              bun: createTestIngredient('1', 'bun'),
              middle: [],
            },
            addIngredient(createTestIngredient('2', 'bun'))
        )
    ).toEqual({
      bun: expect.objectContaining(createTestIngredient('2', 'bun')),
      middle: [],
    });
  });

  it('should handle add ingredient (middle) action when initial state', () => {
    expect(
        burgerConstructorReducer(
            initialState,
            addIngredient(createTestIngredient('1', 'main'))
        )
    ).toEqual({
      bun: null,
      middle: [
        expect.objectContaining(createTestIngredient('1', 'main'))
      ]
    });
  });

  it('should handle add ingredient (middle) when state has middle', () => {
    expect(
        burgerConstructorReducer(
            {
              bun: null,
              middle: [
                createTestIngredient('1', 'main')
              ],
            },
            addIngredient(createTestIngredient('2', 'sauce'))
        )
    ).toEqual({
      bun: null,
      middle: [
        expect.objectContaining(createTestIngredient('1', 'main')),
        expect.objectContaining(createTestIngredient('2', 'sauce')),
      ]
    });
  });

  it('should handle delete ingredient action', () => {
    expect(
        burgerConstructorReducer(
            {
              bun: createTestIngredient('1', 'bun', {uuid: '1'}),
              middle: [
                createTestIngredient('2', 'main', {uuid: '2'}),
                createTestIngredient('3', 'sauce', {uuid: '3'}),
              ],
            },
            deleteIngredient(createTestIngredient('3', 'sauce', {uuid: '3'}))
        )
    ).toEqual({
      bun: createTestIngredient('1', 'bun', {uuid: '1'}),
      middle: [
        createTestIngredient('2', 'main', {uuid: '2'}),
      ]
    });
  });

  it('should handle clear ingredients action', () => {
    expect(
        burgerConstructorReducer(
            {
              bun: createTestIngredient('1', 'bun'),
              middle: [
                createTestIngredient('2', 'main'),
                createTestIngredient('3', 'sauce'),
              ],
            },
            clearIngredients()
        )
    ).toEqual({
      ...initialState,
    });
  });

  it('should handle move ingredient action', () => {
    expect(
        burgerConstructorReducer(
            {
              bun: createTestIngredient('1', 'bun', {uuid: '1'}),
              middle: [
                createTestIngredient('2', 'main', {uuid: '2'}),
                createTestIngredient('4', 'main', {uuid: '4'}),
                createTestIngredient('3', 'sauce', {uuid: '3'}),
              ],
            },
            moveIngredient('4', '3')
        )
    ).toEqual({
      bun: createTestIngredient('1', 'bun', {uuid: '1'}),
      middle: [
        createTestIngredient('2', 'main', {uuid: '2'}),
        createTestIngredient('3', 'sauce', {uuid: '3'}),
        createTestIngredient('4', 'main', {uuid: '4'}),
      ],
    });
  });

});
