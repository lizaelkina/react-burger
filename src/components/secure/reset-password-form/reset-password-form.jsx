import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Loader} from '../../shared/loader/loader';
import {ErrorMessage} from '../../shared/error-message/error-message';
import {changeCode, changePassword, startResetPassword} from '../../../services/actions/reset-password';
import resetFormStyles from './reset-password-form.module.css';

export const ResetPasswordForm = () => {

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const {isLoading, success, formData, formValidity, errorMessage} = useSelector(store => ({
    isLoading: store.createResetPassword.isLoading,
    success: store.createResetPassword.success,
    formData: store.createResetPassword.formData,
    formValidity: store.createResetPassword.formValidity,
    errorMessage: store.createResetPassword.errorMessage,
  }))

  const isFormValid = formValidity.password && formValidity.code;

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(startResetPassword(formData));
  }

  return (
      <form className={resetFormStyles.form} noValidate onSubmit={formSubmit}>
        <PasswordInput autoComplete='off'
                       required={true}
                       minLength={6}
                       name={'password'}
                       value={formData.password}
                       placeholder={'Введите новый пароль'}
                       size={'default'}
                       icon={'ShowIcon'}
                       onChange={event => dispatch(changePassword(event.target.value, event.target.validity.valid))}
        />
        <Input autoComplete='off'
               required={true}
               minLength={4}
               name={'code'}
               value={formData.code}
               type={'text'}
               placeholder={'Введите код из письма'}
               error={false}
               errorText={'Неверный код'}
               ref={inputRef}
               size={'default'}
               onChange={event => dispatch(changeCode(event.target.value, event.target.validity.valid))}
        />
        <Button extraClass={resetFormStyles.form__button}
                htmlType='submit'
                type='primary'
                size='medium'
                disabled={!isFormValid}>
          Сохранить
        </Button>
        <div className={resetFormStyles.form__error}>
          {!isLoading && errorMessage && <ErrorMessage message={errorMessage}/>}
        </div>
        {isLoading && <Loader overlay={true}/>}
      </form>
  )
}
