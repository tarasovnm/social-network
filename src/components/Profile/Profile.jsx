import s from './Profile.module.scss';
import User from './User/User';
import Posts from "./Posts/Posts";
import PostsContainer from "./Posts/PostsConainer";

function Profile(props) {
    return (
        <div className={s.profile}>
            <User />
            <PostsContainer />
        </div>
    );
}

export default Profile;