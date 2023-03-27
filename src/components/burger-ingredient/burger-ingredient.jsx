import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientPropTypes} from '../../utils/prop-types';
// import {selectIngredient} from '../../services/actions/selected-ingredient';
import {addIngredient} from '../../services/actions/burger-constructor';
import burgerIngredientStyles from './burger-ingredient.module.css';
import {useMemo} from 'react';

export const BurgerIngredient = ({ingredient}) => {

  const dispatch = useDispatch();
  
  const {bun, middle} = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    middle: store.burgerConstructor.middle,
  }))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allIngredients = bun ? [...middle, bun, bun] : middle;

  const count = useMemo(() => allIngredients.filter(item => item._id === ingredient._id).length, [allIngredients, ingredient._id]);

  return (
      <li className={burgerIngredientStyles.card} onClick={() => dispatch(addIngredient(ingredient))}>
        <img className='p-4' src={ingredient.image} alt={ingredient.name}/>
        {
          count > 0 ? <Counter count={count} size='default' extraClass='m-1'/> : null
        }
        <div className={burgerIngredientStyles.card__price}>
          <span className='text text_type_digits-default'>{ingredient.price}</span>
          <CurrencyIcon type='primary'/>
        </div>
        <span className={cn(burgerIngredientStyles.card__name, 'text text_type_main-default')}>
          {ingredient.name}
        </span>
      </li>
  );
}

BurgerIngredient.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
}
