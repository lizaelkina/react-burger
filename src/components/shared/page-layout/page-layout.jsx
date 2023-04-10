import {Outlet} from 'react-router';
import {AppHeader} from '../app-header/app-header';
import pageLayoutStyles from './page-layout.module.css'

export const PageLayout = () => {
  return (
      <div className={pageLayoutStyles.page}>
        <AppHeader/>
        <main className={pageLayoutStyles.main}>
          <Outlet/>
        </main>
      </div>
  )
}
