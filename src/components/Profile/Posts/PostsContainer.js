import {addPostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;