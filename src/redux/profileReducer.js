import { profileAPI } from './../api/api';

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    {
      id: 1,
      message: 'Hi, how are you today?',
      likesCount: 12
    },
    {
      id: 2,
      message: 'It\'s my firts post!',
      likesCount: 14
    },
  ],
  newPostText: '',
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.text
      }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (text) => ({ type: SET_STATUS, text });

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfileData(userId)
    .then(response => {
      dispatch(setProfile(response));
    });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
}




export default profileReducer;