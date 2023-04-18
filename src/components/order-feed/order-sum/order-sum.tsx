import cn from 'classnames';
import orderSumStyles from './order-sum.module.css';

export const OrderSum = () => {
  return (
      <section className={cn(orderSumStyles.section)}>
        <div className={orderSumStyles.container}>
          <div className={orderSumStyles.column}>
            <h5 className='text text_type_main-medium text_color_primary mb-6'>Готовы:</h5>
            <ul className={orderSumStyles.list}>
              <li className='text text_type_digits-default text_color_success'>034533</li>
            </ul>
          </div>
          <div className={orderSumStyles.column}>
            <h5 className='text text_type_main-medium text_color_primary mb-6'>В работе:</h5>
            <ul className={orderSumStyles.list}>
              <li className='text text_type_digits-default mb-2'>034538</li>
            </ul>
          </div>
        </div>
        <div>
          <h5 className='text text_type_main-medium text_color_primary'>Выполнено за все время:</h5>
          <span className={cn(orderSumStyles.shadow, 'text text_type_digits-large')}>28 752</span>
        </div>
        <div>
          <h5 className='text text_type_main-medium text_color_primary'>Выполнено за сегодня:</h5>
          <span className={cn(orderSumStyles.shadow, 'text text_type_digits-large')}>138</span>
        </div>
      </section>
  );
}
