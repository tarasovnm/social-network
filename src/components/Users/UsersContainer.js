import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersCount,
  toggleIsFetching,
  unfollow,
  toggleFollowingInProgress
} from "../../redux/usersReducer";
import Users from "./Users";
import Loader from "./Loader/Loader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageUsersCount)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageUsersCount)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
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
  setUsers,
  setUsersCount,
  setCurrentPage,
  toggleIsFetching,
  toggleFollowingInProgress,
})(UsersContainer);