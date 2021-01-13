import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post';
import s from './Posts.module.scss';

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

const PostsReduxForm = reduxForm({ form: 'login' })(PostsForm);

function Posts(props) {

  let posts = props.posts.map(post => Post(post));

  let addPost = (formData) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div className={s.posts}>
      <h3 className={s.posts__title}>My posts</h3>
      <PostsReduxForm onSubmit={addPost} />
      {posts}
    </div>
  );
}

export default Posts;