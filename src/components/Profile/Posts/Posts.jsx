import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.scss';
import PostsForm from "./PostsForm/PostsForm";

function Posts(props) {

  let posts = props.posts.map(post => Post(post));

  let addPost = (formData) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div className={s.posts}>
      <h3 className={s.posts__title}>My posts</h3>
      <PostsForm onSubmit={addPost} />
      {posts}
    </div>
  );
}

export default Posts;