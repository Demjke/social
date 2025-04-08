import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../../hoc/WithAuthRedirect";
import { getStatus, getUserProfile, updateStatus } from "../../../store/profile-reducer";
import Profile from "./Profile";

const ProfileContainer = () => {
    const { userId: paramUserId } = useParams();
    const dispatch = useDispatch();

    const profile = useSelector(state => state.profilePage.profile);
    const isLoading = useSelector(state => state.profilePage.isLoading);
    const status = useSelector(state => state.profilePage.status);
    const authorizedUserId = useSelector(state => state.auth.userId);

    const userId = +paramUserId || authorizedUserId;

    useEffect(() => {
        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId));
    }, [userId, dispatch]);

    return (
        <Profile
            profile={profile}
            isLoading={isLoading}
            status={status}
            updateStatus={newStatus => dispatch(updateStatus(newStatus))}
        />
    );
};

export default WithAuthRedirect(ProfileContainer);
