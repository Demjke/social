import userPhoto from "../../../../images/main/users/user.png";
import Prefolader from "../../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ isLoading, profile, status, updateStatus }) =>
    isLoading || !profile ? (
        <Prefolader />
    ) : (
        <div className={classes.info}>
            <div className={classes.info_img}>
                <img src={profile.photos.small ? profile.photos.small : userPhoto} alt="Profile-photo" />
            </div>
            <div className={classes.content}>
                <h2 className={classes.name}>{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <div className={classes.description}>{profile.lookingForAJobDescription}</div>
                <div className={classes.contacts}>
                    {Object.keys(profile.contacts).map((contact, i) => (
                        <a
                            href={profile.contacts[contact] ? profile.contacts[contact] : "#"}
                            className={classes.contact}
                            key={i}
                        >
                            {contact}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

export default ProfileInfo;
