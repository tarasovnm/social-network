import FriendsList from "./FriendsList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;