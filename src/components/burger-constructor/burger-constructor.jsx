import cn from 'classnames';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ConstructorList} from '../constructor-list/constructor-list';
import burgerConstructorStyles from './burger-constructor.module.css';

export const BurgerConstructor = ({ingredients}) => {
  return (
      <section className={cn(burgerConstructorStyles.section, 'mt-25', 'ml-4', 'mr-4', 'mb-10')}>
        <ConstructorList ingredients={ingredients}/>
        <div className={cn(burgerConstructorStyles.price, 'mt-10',)}>
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
