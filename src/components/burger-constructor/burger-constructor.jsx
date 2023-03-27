import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {Burger} from '../burger/burger';
import {OrderTotal} from '../order-total/order-total';
import {closeOrderModal, CREATE_ORDER_LOADING} from '../../services/actions/create-order';
import {Modal} from '../modal/modal';
import {OrderDetails} from '../order-details/order-details';
import burgerConstructorStyles from './burger-constructor.module.css';

export const BurgerConstructor = () => {

  const dispatch = useDispatch();

  const {bun, middle, isOpenModal} = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    middle: store.burgerConstructor.middle,
    isOpenModal: store.createOrder.isOpenModal,
  }))

  const isEmpty = bun === null && middle.length === 0;

  const isButtonDisabled = bun === null;

  return (
      <>
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
                <div className={cn(burgerConstructorStyles.checkout, 'mt-10 mr-4')}>
                  <OrderTotal/>
                  <Button htmlType='button'
                          type='primary'
                          size='large'
                          extraClass={burgerConstructorStyles.button}
                          disabled={isButtonDisabled}
                          onClick={() => dispatch({
                            type: CREATE_ORDER_LOADING,
                          })}>
                    Оформить заказ
                  </Button>
                </div>
              </>
          }
        </section>

        {isOpenModal &&
            <Modal onClose={() => dispatch(closeOrderModal())}>
              <OrderDetails/>
            </Modal>}
      </>
  );
}
