import {useRef, useState} from 'react';
import cn from 'classnames';
import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import registrationFormStyles from './registration-form.module.css';

export const RegistrationForm = () => {

  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const inputRef = useRef(null);
  
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  return (
      <section className={registrationFormStyles.container}>
        <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
        <form className={cn(registrationFormStyles.form, 'mb-20')}>
          <Input autoComplete='off'
                 name={'name'}
                 value={valueName}
                 type={'text'}
                 placeholder={'Имя'}
                 error={false}
                 errorText={'Неккоректные данные'}
                 ref={inputRef}
                 size={'default'}
                 onChange={event => setValueName(event.target.value)}
                 onIconClick={onIconClick}
          />
          <EmailInput autoComplete='off'
                      name={'email'}
                      value={valueEmail}
                      placeholder={'E-mail'}
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
          <Button extraClass={registrationFormStyles.button_primary}
                  htmlType='submit'
                  type='primary'
                  size='medium'>
            Зарегистрироваться
          </Button>
        </form>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Уже зарегистрированы?</span>
          <Button extraClass={cn(registrationFormStyles.button_secondary, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'>
            Войти
          </Button>
        </div>
      </section>
  )
}
