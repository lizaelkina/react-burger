import {FC, useMemo} from 'react';
import cn from 'classnames';
import {CurrencyIcon, FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components';
import {useAppSelector} from '../../../services/hooks';
import {OrderStatus} from '../order-status/order-status';
import {IngredientIcon} from '../ingredient-icon/ingredient-icon';
import {OrderPrice} from '../order-price/order-price';
import {IIngredient, IOrder} from '../../../utils/data-types';
import orderInfoStyles from './order-info.module.css';

type TOrderInfoProps = {
  order: IOrder;
};

type TIngredientWithCount = {
  ingredient: IIngredient;
  count: number;
};

export const OrderInfo: FC<TOrderInfoProps> = ({order}) => {

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

  const ingredientWithCountList = useMemo(() => {
    const result: TIngredientWithCount[] = [];
    orderIngredients.forEach(ingredient => {
      const foundItem = result.find(item => item.ingredient._id === ingredient._id)
      if (foundItem) {
        foundItem.count += 1;
      } else {
        result.push({ingredient: ingredient, count: 1})
      }
    })
    result.sort((a, b) => a.ingredient.type === 'bun' ? -1 : b.ingredient.type === 'bun' ? 1 : 0);
    return result
  }, [orderIngredients]);

  return (
      <article className={cn(orderInfoStyles.card, 'pb-15')}>
        <h5 className='text text_type_main-medium text_color_primary mt-5 mb-3'>
          {order.name}
        </h5>
        <OrderStatus status={order.status}/>
        <span className='text text_type_main-medium text_color_primary mt-15 mb-6'>Состав:</span>
        <ul className={cn(orderInfoStyles.list, orderInfoStyles.scroll, 'custom-scroll')}>
          {ingredientWithCountList.map(item => {
            return (
                <li className={orderInfoStyles.list_item} key={item.ingredient._id}>
                  <IngredientIcon ingredient={item.ingredient}/>
                  <span className={cn(orderInfoStyles.name, 'text text_type_main-default text_color_primary')}>
                      {item.ingredient.name}
                    </span>
                  <div className={orderInfoStyles.total}>
                      <span
                          className='text text_type_digits-default mr-2'>{`${item.count} x ${item.ingredient.price}`}</span>
                    <CurrencyIcon type='primary'/>
                  </div>
                </li>
            )
          })
          }
        </ul>
        <div className={cn(orderInfoStyles.total, 'mt-10')}>
          <FormattedDate className='text text_type_main-default text_color_inactive' date={new Date(order.createdAt)}/>
          <OrderPrice orderIngredients={orderIngredients}/>
        </div>
      </article>
  );
}
