import React from "react";
import { Field, reduxForm, reset as resetForm } from "redux-form";
import { maxLengthCreator, requared } from "../../../../utils/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const maxLength10 = maxLengthCreator(10);

const Posts = React.memo(({ posts, addPost }) => {
    let postsItems = posts.map(item => (
        <Post key={item.id} message={item.message} id={item.id} likes={item.likesCount} />
    ));

    let onAddPost = (values, dispatch) => {
        addPost(values.newPostText);
        dispatch(resetForm("ProfileAddNewPostForm"));
    };

    return (
        <div className={classes.posts}>
            <h1 className={classes.title}>Posts</h1>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={classes.list}>{postsItems}</div>
        </div>
    );
});

const AddNewPostForm = ({ handleSubmit }) => (
    <form className={classes.form} action="/" onSubmit={handleSubmit}>
        <Field
            name="newPostText"
            component={Textarea}
            placeholder="Enter your text"
            validate={[requared, maxLength10]}
        />
        <button className={classes.btn}>Add post</button>
    </form>
);
let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default Posts;
