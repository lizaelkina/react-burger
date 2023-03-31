import {useState} from 'react';
import cn from 'classnames';
import {Button, EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import authorizationFormStyles from './authorization-form.module.css';

export const AuthorizationForm = () => {

  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  return (
      <section className={authorizationFormStyles.container}>
        <h2 className='text text_type_main-medium mb-6'>Вход</h2>
        <form className={cn(authorizationFormStyles.form, 'mb-20')}>
          <EmailInput autoComplete='off'
                      name={'email'}
                      value={valueEmail}
                      placeholder={'email'}
                      size={'default'}
                      isIcon={false}
                      onChange={event => setValueEmail(event.target.value)}
          />
          <PasswordInput autoComplete='off'
                         name={'password'}
                         value={valuePassword}
                         placeholder={'Пароль'}
                         size={'default'}
                         icon={'ShowIcon'}
                         onChange={event => setValuePassword(event.target.value)}
          />
          <Button extraClass={authorizationFormStyles.button_primary}
                  htmlType='submit'
                  type='primary'
                  size='medium'>
            Войти
          </Button>
        </form>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Вы — новый пользователь?</span>
          <Button extraClass={cn(authorizationFormStyles.button_secondary, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'>
            Зарегистрироваться
          </Button>
        </div>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Забыли пароль?</span>
          <Button extraClass={cn(authorizationFormStyles.button_secondary, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'>
            Восстановить пароль
          </Button>
        </div>
      </section>
  )
}
