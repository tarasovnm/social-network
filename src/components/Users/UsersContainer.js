import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {dispatch(followAC(id))},
        unfollow: (id) => {dispatch(unfollowAC(id))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;