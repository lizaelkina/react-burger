import cn from 'classnames';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import constructorListStyles from './constructor-list.module.css';


export const ConstructorList = ({ingredients}) => {

  if (ingredients.length === 0) {
    return <></>
  }

  const firstBun = ingredients[0];
  const lastBun = ingredients[ingredients.length - 1];
  const middle = ingredients.slice(1, ingredients.length - 2);

  return (
      <>
        <ConstructorElement
            extraClass={'ml-8 mb-4'}
            type={'top'}
            isLocked={true}
            text={firstBun.name}
            price={firstBun.price}
            thumbnail={firstBun.image}
        />
        <ul className={cn(constructorListStyles.list, constructorListStyles.scroll, 'custom-scroll')}>
          {
            middle.map(ingredient => {
              return (
                  <li className={constructorListStyles.list__item}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        extraClass={'ml-2 mr-2'}
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                    />
                  </li>
              )
            })
          }
        </ul>
        <ConstructorElement
            extraClass={'ml-8 mt-4'}
            type={'bottom'}
            isLocked={true}
            text={lastBun.name}
            price={lastBun.price}
            thumbnail={lastBun.image}
        />
      </>
  );
}
