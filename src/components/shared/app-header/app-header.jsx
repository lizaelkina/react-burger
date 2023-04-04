import {NavLink} from 'react-router-dom';
import cn from 'classnames';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.css';

export const AppHeader = () => {
  return (
      <header className={cn(appHeaderStyles.header, 'pt-4 pb-4')}>
        <nav className={appHeaderStyles.nav}>
          <div className={cn(appHeaderStyles.nav__group, appHeaderStyles.nav__group_links)}>
            <NavLink className={cn(appHeaderStyles.link, 'pt-4 pl-5 pr-5 pb-4')}
                     to='/'>
              {({isActive}) => (
                  <>
                    <BurgerIcon type={isActive ? 'primary' : 'secondary'}/>
                    <span className='text text_type_main-default'>Конструктор</span>
                  </>
              )}
            </NavLink>
            <NavLink className={cn(appHeaderStyles.link, 'pt-4 pl-5 pr-5 pb-4')}
                     to='/feed'>
              {({isActive}) => (
                  <>
                    <ListIcon type={isActive ? 'primary' : 'secondary'}/>
                    <span className='text text_type_main-default'>Лента заказов</span>
                  </>
              )}
            </NavLink>
          </div>
          <NavLink aria-label='Логотип Stellar Burgers'
                   className={cn(appHeaderStyles.nav__group, appHeaderStyles.nav__group_logo)}
                   to='/'>
            <Logo/>
          </NavLink>
          <div className={cn(appHeaderStyles.nav__group, appHeaderStyles.nav__group_profile)}>
            <NavLink className={cn(appHeaderStyles.link, 'pt-4 pl-5 pr-5 pb-4')}
                     to='/profile'>
              {({isActive}) => (
                  <>
                    <ProfileIcon type={isActive ? 'primary' : 'secondary'}/>
                    <span className='text text_type_main-default'>Личный кабинет</span>
                  </>
              )}
            </NavLink>
          </div>
        </nav>
      </header>
  );
}
