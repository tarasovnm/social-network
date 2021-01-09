import { usersAPI } from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  totalUsersCount: 0,
  pageUsersCount: 5,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_USERS_COUNT:
      return { ...state, totalUsersCount: action.usersCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setUsersCount = (usersCount) => ({ type: SET_USERS_COUNT, usersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageUsersCount) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageUsersCount).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
    });
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.followUser(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingInProgress(false, userId));
      });
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.unfollowUser(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingInProgress(false, userId));
      });
  }
}


export default usersReducer;