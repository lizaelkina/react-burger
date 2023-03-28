import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {Burger} from '../burger/burger';
import {OrderTotal} from '../order-total/order-total';
import {Modal} from '../modal/modal';
import {OrderDetails} from '../order-details/order-details';
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

  const isEmpty = bun === null && middle.length === 0;

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
          {
              isEmpty &&
              <div className={burgerConstructorStyles.default}>
                <div className={cn(burgerConstructorStyles.item, burgerConstructorStyles.item_top, 'ml-8 mb-4')}>
                </div>
                <div className={cn(burgerConstructorStyles.item, burgerConstructorStyles.item_bottom, 'ml-8 mb-4')}>
                </div>
                <h3 className='text text_type_main-default text_color_inactive ml-8 mt-4'>
                  Перенесите сюда ингредиенты для своего бургера
                </h3>
              </div>
          }
          {!isEmpty && <Burger/>}
          <div className={cn(burgerConstructorStyles.checkout, 'mt-10 mr-4')}>
            <OrderTotal/>
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
