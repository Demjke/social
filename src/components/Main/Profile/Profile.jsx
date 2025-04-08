import mainImg from "../../../images/main/home/img.jpg";
import PostsContainer from "./Posts/PostsContainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile, isLoading, status, updateStatus }) => (
    <div className={classes.profile}>
        <h1 className={classes.title}>Profile</h1>
        <div className={classes.img}>
            <img src={mainImg} alt="" />
        </div>
        <ProfileInfo profile={profile} isLoading={isLoading} status={status} updateStatus={updateStatus} />
        <PostsContainer />
    </div>
);

export default Profile;
