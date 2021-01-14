import s from './LoginForm.module.scss';
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div className={s.form__item}>
        <Field className={s.form__input} component="input" type="text" name="login" placeholder="login" />
      </div>
      <div className={s.form__item}>
        <Field className={s.form__input} component="input" type="text" name="password" placeholder="password" />
      </div>
      <div className={s.form__item}>
        <label>
          <Field className={s.form__input} component="input" type="checkbox" name="rememberMe" /> remember me
          </label>
      </div>
      <div className={s.form__item}>
        <button className={s.form__btn}>Sign in</button>
      </div>
    </form>
  );
}

export default reduxForm({form: 'login'})(LoginForm);