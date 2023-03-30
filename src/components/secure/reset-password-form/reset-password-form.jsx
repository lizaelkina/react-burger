import {useRef, useState} from 'react';
import cn from 'classnames';
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import resetFormStyles from './reset-password-form.module.css';

export const ResetPasswordForm = () => {

  const [valueInput, setValueInput] = useState('');
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  return (
      <section className={cn(resetFormStyles.container)}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <form className={cn(resetFormStyles.form, 'mb-20')}>
          <Input autoComplete='off'
                 name={'password'}
                 value={valueInput}
                 type={'text'}
                 placeholder={'Введите новый пароль'}
                 error={false}
                 errorText={'Слишком простой пароль'}
                 ref={inputRef}
                 size={'default'}
                 icon={'ShowIcon'}
                 onChange={e => setValueInput(e.target.value)}
                 onIconClick={onIconClick}
          />
          <Input autoComplete='off'
                 name={'code'}
                 value={valueInput}
                 type={'text'}
                 placeholder={'Введите код из письма'}
                 error={false}
                 errorText={'Неверный код'}
                 ref={inputRef}
                 size={'default'}
                 onChange={e => setValueInput(e.target.value)}
                 onIconClick={onIconClick}
          />
          <Button extraClass={cn(resetFormStyles.button_primary)}
                  htmlType='submit'
                  type='primary'
                  size='medium'>
            Сохранить
          </Button>
        </form>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</span>
          <Button extraClass={cn(resetFormStyles.button_secondary, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'>
            Войти
          </Button>
        </div>
      </section>
  )
}
