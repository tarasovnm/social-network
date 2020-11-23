import Friend from './Friend/Friend';
import s from './FriendsList.module.scss';

function FriendsList() {
    return (
        <div className={s.friends}>
            <h4 className={s.friends__title}>Friends</h4>

            <div className={s.friends__list}>
                <Friend />
                <Friend />
                <Friend />
            </div>
        </div>
    );
}

export default FriendsList;