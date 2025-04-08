import { Link } from "react-router-dom";
import userPhoto from "../../../images/main/users/user.png";
import classes from "./Users.module.css";

let User = ({ user, followingInProgress, unfollow, follow }) => (
    <div className={classes.item}>
        <div className={classes["item-wrapper"]}>
            <Link to={"/profile/" + user.id} className={classes["item-img"]}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
            </Link>
            <button
                disabled={followingInProgress.some(id => id === user.id)}
                className={classes["item-btn"]}
                onClick={() => (user.followed ? unfollow(user.id) : follow(user.id))}
            >
                {user.followed ? "unfollow" : "follow"}
            </button>
        </div>
        <div className={classes["item-content"]}>
            <div className={classes["item-fullname"]}>{user.name}</div>
            <div className={classes["item-status"]}>{user.status}</div>
            <div className={classes["item-info"]}>
                <div className={classes["item-city"]}>{"user.location.city"}</div>
                <div className={classes["item-coutry"]}>{"user.location.country"}</div>
            </div>
        </div>
    </div>
);

export default User;
