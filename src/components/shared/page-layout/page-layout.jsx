import {Outlet} from 'react-router';
import {AppHeader} from '../app-header/app-header';
import layoutPage from './page-layout.module.css'

export const PageLayout = () => {
  return (
      <div className={layoutPage.page}>
        <AppHeader/>
        <main className={layoutPage.main}>
          <Outlet/>
        </main>
      </div>
  )
}
