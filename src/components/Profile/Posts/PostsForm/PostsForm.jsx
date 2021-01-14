import s from './PostsForm.module.scss';
import {Field, reduxForm} from 'redux-form';

function PostsForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.posts__textarea} name="newPostText" component="textarea" />
      </div>
      <div>
        <button className={s.posts__button}>Add post</button>
      </div>
    </form>
  );
}

export default reduxForm({form: 'login'})(PostsForm);