import Friend from './Friend/Friend';
import s from './FriendsList.module.scss';

function FriendsList(props) {

    let friends = props.friends.map(friend => Friend(friend))

    return (
        <div className={s.friends}>
            <h4 className={s.friends__title}>Friends</h4>

            <div className={s.friends__list}>
                {friends}
            </div>
        </div>
    );
}

export default FriendsList;