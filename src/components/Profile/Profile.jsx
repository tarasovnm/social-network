import s from './Profile.module.scss';
import User from './User/User';
import PostsContainer from "./Posts/PostsConainer";

function Profile(props) {
    return (
        <div className={s.profile}>
            <User profile={props.profile}/>
            <PostsContainer />
        </div>
    );
}

export default Profile;