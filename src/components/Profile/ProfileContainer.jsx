import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { usersAPI } from "../../api/api";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    userId = userId ? userId : 13240;

    usersAPI.getProfileData(userId)
      .then(response => {
        this.props.setProfile(response);
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

let withUrlDateContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDateContainerComponent);