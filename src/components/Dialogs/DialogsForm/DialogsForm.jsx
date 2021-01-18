import s from './DialogsForm.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100);

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.dialogs__textarea}
          component={Textarea}
          validate={[required, maxLength100]}
          name="message" />
      </div>
      <div>
        <button className={s.dialogs__button}>Send!</button>
      </div>
    </form>
  );
}

export default reduxForm({ form: 'login' })(DialogsForm);