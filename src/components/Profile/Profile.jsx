import s from './Profile.module.scss';
import User from './User/User';
import Posts from "./Posts/Posts";

function Profile(props) {
    return (
        <div className={s.profile}>
            <User />
            <Posts posts={props.state.posts}
                   newPostText={props.state.newPostText}
                   dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;