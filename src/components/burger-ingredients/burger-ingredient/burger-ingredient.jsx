import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useDrag} from 'react-dnd';
import {Link, useLocation} from 'react-router-dom';
import cn from 'classnames';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientPropTypes} from '../../../utils/types';
import burgerIngredientStyles from './burger-ingredient.module.css';

export const BurgerIngredient = ({ingredient}) => {

  const location = useLocation();

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  });

  const {bun, middle} = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    middle: store.burgerConstructor.middle,
  }));

  const count = useMemo(() => {
    const allIngredients = bun ? [...middle, bun, bun] : middle;
    return allIngredients.filter(item => item._id === ingredient._id).length
  }, [bun, middle, ingredient._id]);

  return (
      <Link className={burgerIngredientStyles.link}
            state={{backgroundLocation: location, ingredient: ingredient}}
            to={`ingredients/${ingredient._id}`}>
        <li className={burgerIngredientStyles.card}>
          <img className={cn(burgerIngredientStyles.card__image, 'p-4')}
               ref={dragRef}
               src={ingredient.image}
               alt={ingredient.name}/>
          {count > 0 ? <Counter count={count} size='default' extraClass='m-1'/> : null}
          <div className={burgerIngredientStyles.card__price}>
            <span className='text text_type_digits-default'>{ingredient.price}</span>
            <CurrencyIcon type='primary'/>
          </div>
          <h3 className={cn(burgerIngredientStyles.card__name, 'text text_type_main-default')}>
            {ingredient.name}
          </h3>
        </li>
      </Link>
  );
}

BurgerIngredient.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
}
