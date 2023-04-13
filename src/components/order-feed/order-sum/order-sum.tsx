import orderSumStyles from './order-sum.module.css';
import cn from 'classnames';

export const OrderSum = () => {
  return (
      <section className={orderSumStyles.section}>
        <div className={orderSumStyles.container}>
          <div className={orderSumStyles.column}>
            <h5 className='text text_type_main-medium text_color_primary mb-6'>Готовы:</h5>
            <span className='text text_type_digits-default text_color_success mb-2'>034533</span>
            <span className='text text_type_digits-default text_color_success mb-2'>034532</span>
            <span className='text text_type_digits-default text_color_success mb-2'>034530</span>
            <span className='text text_type_digits-default text_color_success mb-2'>034527</span>
            <span className='text text_type_digits-default text_color_success mb-2'>034525</span>
          </div>
          <div className={orderSumStyles.column}>
            <h5 className='text text_type_main-medium text_color_primary mb-6'>В работе:</h5>
            <span className='text text_type_digits-default mb-2'>034538</span>
            <span className='text text_type_digits-default mb-2'>034541</span>
            <span className='text text_type_digits-default mb-2'>034542</span>
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
