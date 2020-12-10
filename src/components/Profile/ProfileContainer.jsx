import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfile(response.data);
            });
    }

    render() {
        return (
           <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => dispatch(setProfile(profile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);