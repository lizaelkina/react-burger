import {useState} from 'react';
import {useSelector} from 'react-redux';
import cn from 'classnames';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Burger} from '../burger/burger';
import {OrderDetails} from '../order-details/order-details';
import {Modal} from '../modal/modal';
import burgerConstructorStyles from './burger-constructor.module.css';

export const BurgerConstructor = () => {

  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);

  const isEmpty = useSelector(store => store.burgerConstructor.isEmpty);

  return (

      <section className={cn(burgerConstructorStyles.section, 'pt-25 pl-3 pb-10')} aria-label='Конструктор бургера'>
        {
            isEmpty &&
            <h3 className={cn(burgerConstructorStyles.default, 'text text_type_main-default text_color_active')}>
              Перенесите сюда ингредиенты для своего бургера
            </h3>
        }
        {
            !isEmpty &&
            <>
              <Burger/>
              <div className={cn(burgerConstructorStyles.price, 'mt-10 mr-4')}>
                <div>
                  <span className='text text_type_digits-medium mr-4'>610</span>
                  <CurrencyIcon type='primary'/>
                </div>
                <Button htmlType='button'
                        type='primary'
                        size='large'
                        onClick={() => setIsOpenOrderModal(true)}>
                  Оформить заказ
                </Button>
              </div>
            </>
        }

        {isOpenOrderModal &&
            <Modal onClose={() => setIsOpenOrderModal(false)}>
              <OrderDetails/>
            </Modal>}
      </section>
  );
}
