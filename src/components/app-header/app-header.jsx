import cn from 'classnames';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.css';

export const AppHeader = () => {
  return (
      <header className={cn(appHeaderStyles.header, 'pt-4 pb-4')}>
        <nav className={appHeaderStyles.nav}>
          <div className={cn(appHeaderStyles.nav__group, appHeaderStyles.nav__group_links)}>
            <a className={cn(appHeaderStyles.link, 'p-5 mr-2')} href='#'>
              <BurgerIcon type='primary'/>
              <span className='text text_type_main-default text_color_primary ml-2'>Конструктор</span>
            </a>
            <a className={cn(appHeaderStyles.link, 'p-5')} href='#'>
              <ListIcon type="secondary"/>
              <span className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</span>
            </a>
          </div>
          <div className={cn(appHeaderStyles.nav__group, appHeaderStyles.nav__group_logo)}>
            <Logo/>
          </div>
          <div className={cn(appHeaderStyles.nav__group, appHeaderStyles.nav__group_profile)}>
            <a className={cn(appHeaderStyles.link, 'p-5')} href='#'>
              <ProfileIcon type='secondary'/>
              <span className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</span>
            </a>
          </div>
        </nav>
      </header>
  );
}
