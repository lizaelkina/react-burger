import {useDispatch, useSelector} from 'react-redux';
import {Button, EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Loader} from '../../shared/loader/loader';
import {ErrorMessage} from '../../shared/error-message/error-message';
import {changeEmail, changePassword, startAuthorization} from '../../../services/actions/authorization';
import authorizationFormStyles from './authorization-form.module.css';

export const AuthorizationForm = () => {

  const dispatch = useDispatch();

  const {isLoading, success, formData, errorMessage} = useSelector(store => ({
    isLoading: store.createAuthorization.isLoading,
    success: store.createAuthorization.success,
    formData: store.createAuthorization.formData,
    errorMessage: store.createAuthorization.errorMessage,
  }))

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(startAuthorization(formData));
  }

  return (
      <form className={authorizationFormStyles.form} noValidate onSubmit={formSubmit}>
        <EmailInput autoComplete='off'
                    required={true}
                    type={'email'}
                    name={'email'}
                    value={formData.email}
                    placeholder={'email'}
                    size={'default'}
                    isIcon={false}
                    onChange={event => dispatch(changeEmail(event.target.value))}
        />
        <PasswordInput autoComplete='off'
                       required={true}
                       minLength={6}
                       name={'password'}
                       value={formData.password}
                       placeholder={'Пароль'}
                       size={'default'}
                       icon={'ShowIcon'}
                       onChange={event => dispatch(changePassword(event.target.value))}
        />
        <Button extraClass={authorizationFormStyles.form__button}
                htmlType='submit'
                type='primary'
                size='medium'>
          Войти
        </Button>
        <div className={authorizationFormStyles.form__error}>
          {!isLoading && errorMessage && <ErrorMessage message={errorMessage}/>}
        </div>
        {isLoading && <Loader overlay={true}/>}
      </form>
  )
}
