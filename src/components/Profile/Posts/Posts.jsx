import Post from './Post/Post';
import s from './Posts.module.scss';

function Posts(props) {

    let posts = props.posts.map(post => Post(post));

    return (
        <div className={s.posts}>
            <h3 className={s.posts__title}>My posts</h3>
            <div>
                <textarea className={s.posts__textarea}></textarea>
            </div>
            <div>
                <button className={s.posts__button}>Add post</button>
            </div>

            {posts}
        </div>
    );
}

export default Posts;