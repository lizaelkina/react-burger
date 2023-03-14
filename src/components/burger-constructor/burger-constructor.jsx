import cn from 'classnames';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ConstructorList} from '../constructor-list/constructor-list';
import burgerConstructorStyles from './burger-constructor.module.css';

export const BurgerConstructor = ({ingredients}) => {
  return (
      <section className={cn(burgerConstructorStyles.section, 'pt-25', 'pl-5', 'pb-10')}>
        <ConstructorList ingredients={ingredients}/>
        <div className={cn(burgerConstructorStyles.price, 'mt-10', 'mr-4')}>
          <div>
            <span className='text text_type_digits-medium mr-4'>610</span>
            <CurrencyIcon type="primary"/>
          </div>
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </section>
  );
}
