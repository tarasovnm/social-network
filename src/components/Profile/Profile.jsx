import s from './Profile.module.scss';
import User from './User/User';
import PostsContainer from "./Posts/PostsContainer";
import ProfileStatus from "./ProfileStatus";

function Profile(props) {
  return (
    <div className={s.profile}>
      <User profile={props.profile} />
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <PostsContainer />
    </div>
  );
}

export default Profile;