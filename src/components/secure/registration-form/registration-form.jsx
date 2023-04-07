import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Loader} from '../../shared/loader/loader';
import {changeEmail, changeName, changePassword, startRegistration} from '../../../services/actions/registration';
import registrationFormStyles from './registration-form.module.css';
import {ErrorMessage} from '../../shared/error-message/error-message';

export const RegistrationForm = () => {

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const {isLoading, success, formData, errorMessage} = useSelector(store => ({
    isLoading: store.createRegistration.isLoading,
    success: store.createRegistration.success,
    formData: store.createRegistration.formData,
    errorMessage: store.createRegistration.errorMessage,
  }))

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(startRegistration(formData));
  }

  return (
      <>
        <form className={cn(registrationFormStyles.form, 'mb-20')} onSubmit={formSubmit}>
          <Input autoComplete='off'
                 name={'name'}
                 value={formData.name}
                 type={'text'}
                 placeholder={'Имя'}
                 error={false}
                 errorText={'Это имя уже занято'}
                 ref={inputRef}
                 size={'default'}
                 onChange={event => dispatch(changeName(event.target.value))}
          />
          <EmailInput autoComplete='off'
                      name={'email'}
                      value={formData.email}
                      placeholder={'E-mail'}
                      size={'default'}
                      isIcon={false}
                      onChange={event => dispatch(changeEmail(event.target.value))}
          />
          <PasswordInput autoComplete='off'
                         name={'password'}
                         value={formData.password}
                         placeholder={'Пароль'}
                         size={'default'}
                         icon={'ShowIcon'}
                         onChange={event => dispatch(changePassword(event.target.value))}
          />
          <Button extraClass={registrationFormStyles.form__button}
                  htmlType='submit'
                  type='primary'
                  size='medium'>
            Зарегистрироваться
          </Button>
          {!isLoading && errorMessage &&
              <ErrorMessage extraClass={registrationFormStyles.form__error} message={errorMessage}/>
          }
          {isLoading && <Loader overlay={true}/>}
        </form>
      </>
  )
}
