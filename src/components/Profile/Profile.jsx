import s from './Profile.module.scss';
import User from './User/User';
import Posts from "./Posts/Posts";

function Profile(props) {
    return (
        <div className={s.profile}>
            <User />
            <Posts posts={props.state.posts}
                   newPostText={props.state.newPostText}
                   updateNewPostText={props.updateNewPostText}
                   addPost={props.addPost}/>
        </div>
    );
}

export default Profile;