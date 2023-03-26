import {useSelector} from 'react-redux';
import cn from 'classnames';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import constructorListStyles from './burger.module.css';


export const Burger = () => {

  const {bun, middle} = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    middle: store.burgerConstructor.middle,
  }))

  return (
      <>
        {
            bun &&
            <ConstructorElement
                key={bun._id + '_top'}
                extraClass={cn(constructorListStyles.list__item, 'ml-8 mb-4')}
                type={'top'}
                isLocked={true}
                text={bun.name + ' (верх)'}
                price={bun.price}
                thumbnail={bun.image}
            />
        }
        <ul className={cn(constructorListStyles.list, constructorListStyles.scroll, 'custom-scroll')}>
          {
            middle.map(ingredient => {
              return (
                  <li className={constructorListStyles.list__item} key={ingredient._id}>
                    <DragIcon type='primary'/>
                    <ConstructorElement
                        key={ingredient._id}
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
        {
            bun &&
            <ConstructorElement
                key={bun._id + '_bottom'}
                extraClass={cn(constructorListStyles.list__item, 'ml-8 mt-4')}
                type={'bottom'}
                isLocked={true}
                text={bun.name + ' (низ)'}
                price={bun.price}
                thumbnail={bun.image}
            />
        }
      </>
  );
}
