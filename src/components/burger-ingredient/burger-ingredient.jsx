import {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientDetails} from '../ingredient-details/ingredient-details';
import {ingredientPropTypes} from '../../utils/prop-types';
import burgerIngredientStyles from './burger-ingredient.module.css';

export const BurgerIngredient = ({ingredient, count}) => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
      <>
        <li className={burgerIngredientStyles.card} onClick={handleOpenModal}>
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
        {isOpenModal && <IngredientDetails ingredient={ingredient} onClose={handleCloseModal}/>}
      </>

  );
}

BurgerIngredient.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  count: PropTypes.number.isRequired
}
