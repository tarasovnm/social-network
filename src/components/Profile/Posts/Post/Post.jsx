import s from './Post.module.scss';
import photo from "../../../../images/gintoki.jpg";

function Post(props) {
    return (
        <div className={s.post}>
            <div className={s.post__user}>
                <img src={photo} alt="User avatar"/>
            </div>
            <p className={s.post__text}>
                {props.message}
            </p>
        </div>
    );
}

export default Post;