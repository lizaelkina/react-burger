import {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useDrag} from 'react-dnd';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientPropTypes} from '../../../utils/prop-types';
import {selectIngredient} from '../../../services/actions/selected-ingredient';
import burgerIngredientStyles from './burger-ingredient.module.css';

export const BurgerIngredient = ({ingredient}) => {

  const dispatch = useDispatch();

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
            to={`ingredients/${ingredient._id}`}>
        <li className={burgerIngredientStyles.card}
            onClick={() => dispatch(selectIngredient(ingredient))}>
          <img className={cn(burgerIngredientStyles.card__image, 'p-4')}
               ref={dragRef}
               src={ingredient.image}
               alt={ingredient.name}/>
          {
            count > 0 ? <Counter count={count} size='default' extraClass='m-1'/> : null
          }
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
