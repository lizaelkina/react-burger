import {FC, useMemo} from 'react';
import cn from 'classnames';
import {Link, useLocation} from 'react-router-dom';
import {PrettyDate} from '../../shared/pretty-date/pretty-date';
import {useAppSelector} from '../../../services/hooks';
import {OrderStatus} from '../order-status/order-status';
import {IngredientIcon} from '../ingredient-icon/ingredient-icon';
import {OrderPrice} from '../order-price/order-price';
import {IIngredient, IOrder} from '../../../utils/data-types';
import orderCardStyles from './order-card.module.css';

type TOrderCardProps = {
  order: IOrder;
  showStatus?: boolean;
};

const iconClass: { [key: string]: string } = {
  index_0: orderCardStyles.ingredient_first,
  index_1: orderCardStyles.ingredient_second,
  index_2: orderCardStyles.ingredient_third,
  index_3: orderCardStyles.ingredient_fourth,
  index_4: orderCardStyles.ingredient_fifth,
  index_5: orderCardStyles.ingredient_sixth,
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

  const uniqueIngredients = useMemo(() => {
    const ingredientSet = new Set<IIngredient>(orderIngredients);
    const result: IIngredient[] = Array.from(ingredientSet);
    result.sort((a, b) => a.type === 'bun' ? -1 : b.type === 'bun' ? 1 : 0);
    return result;
  }, [orderIngredients]);

  const visibleIngredients = useMemo(() => {
    return uniqueIngredients.slice(0, 6);
  }, [uniqueIngredients]);

  return (
      <Link className={orderCardStyles.link}
            state={{backgroundLocation: location, order: order}}
            to={order._id}>
        <li className={orderCardStyles.card}>
          <div className={orderCardStyles.card__info}>
            <span className='text text_type_digits-default'>{`#${order.number}`}</span>
            <PrettyDate date={new Date(order.createdAt)}/>
          </div>
          <h4 className={cn(orderCardStyles.card__title, 'text text_type_main-medium text_color_primary mt-6')}>
            {order.name}
          </h4>
          {showStatus && <OrderStatus status={order.status}/>}
          <div className={cn(orderCardStyles.card__container, 'mt-6')}>
            <ul className={orderCardStyles.card__ingredients}>
              {visibleIngredients.map((ingredient, index) => {
                return (
                    <li className={orderCardStyles.list_item} key={ingredient._id}>
                      {index === visibleIngredients.length - 1
                          ? <IngredientIcon ingredient={ingredient}
                                            moreCount={uniqueIngredients.length - visibleIngredients.length}
                                            extraClass={iconClass['index_' + index]}/>
                          : <IngredientIcon ingredient={ingredient}
                                            extraClass={iconClass['index_' + index]}/>
                      }
                    </li>
                )
              })}
            </ul>
            <OrderPrice orderIngredients={orderIngredients}/>
          </div>
        </li>
      </Link>
  );
}
