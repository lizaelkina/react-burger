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
                     activeClassName={appHeaderStyles.link_type_current}
                     to='/'>
              <BurgerIcon type='primary'/>
              <span className='text text_type_main-default text_color_primary'>Конструктор</span>
            </NavLink>
            <NavLink className={cn(appHeaderStyles.link, 'pt-4 pl-5 pr-5 pb-4')}
                     activeClassName={cn(appHeaderStyles.link_type_current, 'text_color_inactive')}
                     to='/feed'>
              <ListIcon type="secondary"/>
              <span className='text text_type_main-default text_color_inactive'>Лента заказов</span>
            </NavLink>
          </div>
          <div className={cn(appHeaderStyles.nav__group, appHeaderStyles.nav__group_logo)}
               aria-label='Логотип Stellar Burgers'>
            <Logo/>
          </div>
          <div className={cn(appHeaderStyles.nav__group, appHeaderStyles.nav__group_profile)}>
            <NavLink className={cn(appHeaderStyles.link, 'pt-4 pl-5 pr-5 pb-4')}
                     activeClassName={appHeaderStyles.link_type_current}
                     to='/profile'>
              <ProfileIcon type='secondary'/>
              <span className='text text_type_main-default text_color_inactive'>Личный кабинет</span>
            </NavLink>
          </div>
        </nav>
      </header>
  );
}
