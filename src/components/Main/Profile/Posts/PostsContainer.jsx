import { connect } from "react-redux";
import { addPostCreator } from "../../../../store/profile-reducer";
import Posts from "./Posts";

let mapStateToProps = ({ profilePage }) => ({
    posts: profilePage.posts,
    newPostText: profilePage.newPostText,
});

let mapDispatchToProps = dispatch => ({ addPost: newPostText => dispatch(addPostCreator(newPostText)) });

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
