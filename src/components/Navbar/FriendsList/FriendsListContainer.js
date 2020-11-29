import FriendsList from "./FriendsList";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

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