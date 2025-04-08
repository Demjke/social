import React from "react";
import like from "../../../../../images/main/home/like.svg";
import classes from "./Post.module.css";

const Post = props => {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>
                <img
                    src="https://www.vetmed.wisc.edu/wp-content/uploads/2022/12/lina-angelov-Ah_QC2v2alE-unsplash-1200x960.jpg"
                    alt=""
                />
            </div>
            <div className={classes.post_message}>{props.message}</div>
            <div className={classes.like}>
                <img src={like} alt="Like" />
            </div>
        </div>
    );
};

export default Post;
