import Post from './Post/Post';
import s from './Posts.module.scss';

function Posts() {
    return (
        <div className={s.posts}>
            <h3 className={s.posts__title}>My posts</h3>
            <Post message="Hi, how are you today?" />
            <Post message="It's my firts post!" />
        </div>
    );
}

export default Posts;