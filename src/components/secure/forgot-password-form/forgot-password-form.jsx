import {useState} from 'react';
import cn from 'classnames';
import {Button, EmailInput} from '@ya.praktikum/react-developer-burger-ui-components';
import forgotFormStyles from './forgot-password-form.module.css';

export const ForgotPasswordForm = () => {

  const [valueEmail, setValueEmail] = useState('');

  return (
      <section className={forgotFormStyles.container}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <form className={cn(forgotFormStyles.form, 'mb-20')}>
          <EmailInput autoComplete='off'
                      name={'e-mail'}
                      value={valueEmail}
                      placeholder={'Укажите e-mail'}
                      size={'default'}
                      isIcon={false}
                      onChange={event => setValueEmail(event.target.value)}
          />
          <Button extraClass={forgotFormStyles.button_primary}
                  htmlType='submit'
                  type='primary'
                  size='medium'>
            Восстановить
          </Button>
        </form>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</span>
          <Button extraClass={cn(forgotFormStyles.button_secondary, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'>
            Войти
          </Button>
        </div>
      </section>
  )
}
