import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingInProgress,
  getUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import Loader from "./Loader/Loader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageUsersCount);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageUsersCount);
  }

  render() {
    return <>
      {this.props.isFetching ? <Loader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageUsersCount={this.props.pageUsersCount}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageUsersCount: state.usersPage.pageUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers
})(UsersContainer);