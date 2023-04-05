import {NavigationProfile} from '../../../components/navigation-profile/navigation-profile';
import ordersPageStyles from './orders.module.css';

export const OrdersPage = () => {
  return (
      <section className={ordersPageStyles.page} aria-label='История заказов'>
        <NavigationProfile/>
      </section>
  )
}
