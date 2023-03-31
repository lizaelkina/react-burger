import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {Burger} from './burger/burger';
import {BurgerPrice} from './burger-price/burger-price';
import {Modal} from '../shared/modal/modal';
import {OrderDetails} from './order-details/order-details';
import {closeOrderModal, startCreatingOrder} from '../../services/actions/create-order';
import {clearIngredients} from '../../services/actions/burger-constructor';
import burgerConstructorStyles from './burger-constructor.module.css';

export const BurgerConstructor = () => {

  const dispatch = useDispatch();

  const {bun, middle, isOpenModal, isOrderProcessing, isOrderCreated} = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    middle: store.burgerConstructor.middle,
    isOpenModal: store.createOrder.isOpenModal,
    isOrderProcessing: store.createOrder.isLoading,
    isOrderCreated: store.createOrder.success,
  }))

  const isButtonDisabled = bun === null || middle.length === 0;

  function handleCreateOrder() {
    const ingredientIdList = [...middle, bun, bun].map(item => item._id);
    dispatch(startCreatingOrder(ingredientIdList));
  }

  function handleClickCloseModal() {
    if (!isOrderProcessing) {
      dispatch(closeOrderModal());
    }
    if (isOrderCreated) {
      dispatch(clearIngredients());
    }
  }

  return (
      <>
        <section className={cn(burgerConstructorStyles.section, 'pt-25 pl-3 pb-10')} aria-label='Конструктор бургера'>
          <Burger/>
          <div className={cn(burgerConstructorStyles.checkout, 'mt-10 mr-4')}>
            <BurgerPrice/>
            <Button htmlType='button'
                    type='primary'
                    size='large'
                    extraClass={burgerConstructorStyles.button}
                    disabled={isButtonDisabled}
                    onClick={handleCreateOrder}>
              Оформить заказ
            </Button>
          </div>
        </section>

        {isOpenModal &&
            <Modal onClose={handleClickCloseModal}>
              <OrderDetails/>
            </Modal>}
      </>
  );
}
