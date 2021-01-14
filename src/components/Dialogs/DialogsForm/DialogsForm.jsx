import s from './DialogsForm.module.scss';
import {Field, reduxForm} from 'redux-form';

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.dialogs__textarea} component="textarea" name="message" />
      </div>
      <div>
        <button className={s.dialogs__button}>Send!</button>
      </div>
    </form>
  );
}

export default reduxForm({form: 'login'})(DialogsForm);