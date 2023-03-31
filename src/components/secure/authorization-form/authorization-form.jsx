import {useRef, useState} from 'react';
import cn from 'classnames';
import {Button, EmailInput, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import authorizationFormStyles from './authorization-form.module.css';

export const AuthorizationForm = () => {

  const [valueEmail, setValueEmail] = useState('');
  const onChange = e => {
    setValueEmail(e.target.value)
  }

  const [valueInput, setValueInput] = useState('');
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

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
                      onChange={e => onChange}
          />
          <Input autoComplete='off'
                 name={'password'}
                 value={valueInput}
                 type={'text'}
                 placeholder={'Пароль'}
                 error={false}
                 errorText={'Неверный пароль'}
                 ref={inputRef}
                 size={'default'}
                 icon={'ShowIcon'}
                 onChange={e => setValueInput(e.target.value)}
                 onIconClick={onIconClick}
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
