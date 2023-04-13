import PropTypes from 'prop-types';
import cn from 'classnames';
import orderIngredientStyles from './order-ingredient.module.css';

export const OrderIngredient = ({extraClass}) => {
  return (
        <img className={cn(orderIngredientStyles.image, extraClass)}
             src={'ingredient.src'}
             alt={'ingredient.name'}
        />
  );
}

OrderIngredient.propTypes = {
  extraClass: PropTypes.string,
}
