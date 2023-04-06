import {Outlet} from 'react-router';
import {AppHeader} from '../app-header/app-header';
import layoutPage from './layout-page.module.css'

export const LayoutPage = () => {
  return (
      <div className={layoutPage.page}>
        <AppHeader/>
        <main className={layoutPage.main}>
          <Outlet/>
        </main>
      </div>
  )
}
