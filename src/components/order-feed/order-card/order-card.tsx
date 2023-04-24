import {FC, useMemo} from 'react';
import cn from 'classnames';
import {Link, useLocation} from 'react-router-dom';
import {FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components';
import {OrderStatus} from '../order-status/order-status';
import {IngredientIcon} from '../ingredient-icon/ingredient-icon';
import {OrderPrice} from '../order-price/order-price';
import {IIngredient, IOrder} from '../../../utils/data-types';
import orderCardStyles from './order-card.module.css';
import {useAppSelector} from '../../../services/hooks';

type TOrderCardProps = {
  order: IOrder;
  showStatus?: boolean;
};

export const OrderCard: FC<TOrderCardProps> = ({order, showStatus}) => {

  const location = useLocation();

  const {ingredients} = useAppSelector(store => ({
    ingredients: store.burgerIngredients.ingredients,
  }));

  const orderIngredients = useMemo(() => {
    return order.ingredients.map(id => {
      return ingredients.find(ingredient => ingredient._id === id);
    }).filter(ingredient => {
      return ingredient;
    }) as IIngredient[];
  }, [ingredients, order]);

  return (
      <Link className={orderCardStyles.link}
            state={{backgroundLocation: location, order: order}}
            to={order._id}>
        <li className={orderCardStyles.card}>
          <div className={orderCardStyles.card__info}>
            <span className='text text_type_digits-default'>{`#${order.number}`}</span>
            <FormattedDate className='text text_type_main-default text_color_inactive'
                           date={new Date(order.createdAt)}/>
          </div>
          <h4 className='text text_type_main-medium text_color_primary mt-6'>{order.name}</h4>
          {showStatus && <OrderStatus status={order.status}/>}
          <div className={cn(orderCardStyles.card__container, 'mt-6')}>
            <ul className={orderCardStyles.card__ingredients}>
              <li className={orderCardStyles.list_item}>
                <IngredientIcon extraClass={cn(orderCardStyles.ingredient_first)}/>
                {/*<span className={cn(orderCardStyles.more, 'text text_type_digits-default')}>*/}
                {/*    +3*/}
                {/*</span>*/}
              </li>
            </ul>
            <OrderPrice orderIngredients={orderIngredients}/>
          </div>
        </li>
      </Link>
  );
}
