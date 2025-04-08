import { useEffect, useState } from "react";
import classes from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = ({ status: statusName, updateStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(statusName);

    useEffect(() => {
        setStatus(statusName);
    }, [statusName]);

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    };

    const onStatusChange = e => setStatus(e.currentTarget.value);

    return (
        <div className={classes.status}>
            {editMode ? (
                <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
            ) : (
                <span onDoubleClick={activateEditMode}>{statusName || "-------"}</span>
            )}
        </div>
    );
};

export default ProfileStatusWithHooks;
