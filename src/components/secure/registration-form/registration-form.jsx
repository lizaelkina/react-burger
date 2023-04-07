import {useDispatch, useSelector} from 'react-redux';
import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Loader} from '../../shared/loader/loader';
import {ErrorMessage} from '../../shared/error-message/error-message';
import {changeEmail, changeName, changePassword, startRegistration} from '../../../services/actions/registration';
import registrationFormStyles from './registration-form.module.css';

export const RegistrationForm = () => {

  const dispatch = useDispatch();

  const {isLoading, success, formData, formValidity, errorMessage} = useSelector(store => ({
    isLoading: store.createRegistration.isLoading,
    success: store.createRegistration.success,
    formData: store.createRegistration.formData,
    formValidity: store.createRegistration.formValidity,
    errorMessage: store.createRegistration.errorMessage,
  }));

  const isFormValid = formValidity.name && formValidity.email && formValidity.password;

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(startRegistration(formData));
  }

  return (
      <form className={registrationFormStyles.form} noValidate onSubmit={formSubmit}>
        <Input autoComplete='off'
               required={true}
               name={'name'}
               value={formData.name}
               type={'text'}
               placeholder={'Имя'}
               size={'default'}
               onChange={event => dispatch(changeName(event.target.value, event.target.validity.valid))}
        />
        <EmailInput autoComplete='off'
                    required={true}
                    type={'email'}
                    name={'email'}
                    value={formData.email}
                    placeholder={'E-mail'}
                    size={'default'}
                    isIcon={false}
                    onChange={event => dispatch(changeEmail(event.target.value, event.target.validity.valid))}
        />
        <PasswordInput autoComplete='off'
                       required={true}
                       minLength={6}
                       name={'password'}
                       value={formData.password}
                       placeholder={'Пароль'}
                       size={'default'}
                       icon={'ShowIcon'}
                       onChange={event => dispatch(changePassword(event.target.value, event.target.validity.valid))}
        />
        <Button extraClass={registrationFormStyles.form__button}
                htmlType='submit'
                type='primary'
                size='medium'
                disabled={!isFormValid}>
          Зарегистрироваться
        </Button>
        <div className={registrationFormStyles.form__error}>
          {!isLoading && errorMessage && <ErrorMessage message={errorMessage}/>}
        </div>
        {isLoading && <Loader overlay={true}/>}
      </form>
  )
}
