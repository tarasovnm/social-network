import s from './LoginForm.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormControls/FormControls';
import { required } from '../../../utils/validators/validators';

const LoginForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div className={s.form__item}>
        <Field className={s.form__input}
          component={Input}
          type="text"
          name="login"
          placeholder="login"
          validate={[required]} />
      </div>
      <div className={s.form__item}>
        <Field className={s.form__input}
          component={Input}
          type="text"
          name="password"
          placeholder="password"
          validate={[required]} />
      </div>
      <div className={s.form__item}>
        <label>
          <Field className={s.form__input} component={Input} type="checkbox" name="rememberMe" /> remember me
          </label>
      </div>
      <div className={s.form__item}>
        <button className={s.form__btn}>Sign in</button>
      </div>
    </form>
  );
}

export default reduxForm({ form: 'login' })(LoginForm);