import {useRef, useState} from 'react';
import cn from 'classnames';
import {Button, EmailInput, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import registrationFormStyles from './registration-form.module.css';

export const RegistrationForm = () => {

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
      <section className={cn(registrationFormStyles.card)}>
        <span className='text text_type_main-medium mb-6'>Регистрация</span>
        <form className={cn(registrationFormStyles.form, 'mb-20')}>
          <Input autocomplete="off"
                 name={'name'}
                 value={valueInput}
                 type={'text'}
                 placeholder={'Имя'}
                 error={false}
                 errorText={'Неккоректные данные'}
                 ref={inputRef}
                 size={'default'}
                 onChange={e => setValueInput(e.target.value)}
                 onIconClick={onIconClick}
          />
          <EmailInput autocomplete="off"
                      name={'email'}
                      value={valueEmail}
                      placeholder={'email'}
                      size={'default'}
                      isIcon={false}
                      onChange={e => onChange}
          />
          <Input autocomplete="off"
                 name={'password'}
                 value={valueInput}
                 type={'text'}
                 placeholder={'Пароль'}
                 error={false}
                 errorText={'Слишком простой пароль'}
                 ref={inputRef}
                 size={'default'}
                 icon={'ShowIcon'}
                 onChange={e => setValueInput(e.target.value)}
                 onIconClick={onIconClick}
          />
          <Button extraClass={cn(registrationFormStyles.button_primary)}
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
