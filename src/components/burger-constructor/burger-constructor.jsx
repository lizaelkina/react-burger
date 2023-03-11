import React from 'react';
import cn from 'classnames';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';

export const BurgerConstructor = ({ingredients}) => {
  return (
      <section className={cn(burgerConstructorStyles.section, 'pl-4', 'pr-4')}>
        <ul className={cn(burgerConstructorStyles.list, 'pt-25', 'pl-8', 'pb-10')}>
          {
            ingredients.map((ingredient, index) => {
              return (
                  <li className={burgerConstructorStyles.list__item}>
                    {
                      index !== 0 && index !== ingredients.length - 1 ? <DragIcon type="primary"/> : null
                    }
                    <ConstructorElement
                        type={index === 0 ? 'top' : index === ingredients.length - 1 ? 'bottom' : null}
                        isLocked={index === 0 || index === ingredients.length - 1}
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                    />
                  </li>
              )
            })
          }
        </ul>
        <div className={cn(burgerConstructorStyles.price)}>
          <div>
            <span className='text text_type_digits-medium mr-2'>610</span>
            <CurrencyIcon type="primary"/>
          </div>
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </section>
  );
}

