import s from './PostsForm.module.scss';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormControls/FormControls';

const maxLength30 = maxLengthCreator(30);

function PostsForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.posts__textarea}
          name="newPostText"
          component={Textarea}
          validate={[required, maxLength30]} />
      </div>
      <div>
        <button className={s.posts__button}>Add post</button>
      </div>
    </form>
  );
}

export default reduxForm({ form: 'login' })(PostsForm);