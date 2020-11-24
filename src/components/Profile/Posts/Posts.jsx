import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.scss';

function Posts(props) {

    let posts = props.posts.map(post => Post(post));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let postChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.posts}>
            <h3 className={s.posts__title}>My posts</h3>
            <div>
                <textarea className={s.posts__textarea} onChange={postChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button className={s.posts__button} onClick={addPost}>Add post</button>
            </div>

            {posts}
        </div>
    );
}

export default Posts;