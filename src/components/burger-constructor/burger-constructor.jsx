import {useState} from 'react';
import cn from 'classnames';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ConstructorList} from '../constructor-list/constructor-list';
import {OrderDetails} from '../order-details/order-details';
import {Modal} from '../modal/modal';
import {ingredientsArrayTypes} from '../../utils/prop-types';
import burgerConstructorStyles from './burger-constructor.module.css';

export const BurgerConstructor = ({ingredients}) => {

  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);

  return (
      <>
        <section className={cn(burgerConstructorStyles.section, 'pt-25 pl-3 pb-10')} aria-label='Конструктор бургера'>
          <ConstructorList ingredients={ingredients}/>
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
        </section>

        {isOpenOrderModal &&
            <Modal onClose={() => setIsOpenOrderModal(false)}>
              <OrderDetails/>
            </Modal>}
      </>
  );
}

BurgerConstructor.propTypes = {
  ingredients: ingredientsArrayTypes.isRequired
}
