import Paginations from "../../common/Paginations/Paginations";
import Prefolader from "../../common/Preloader/Preloader";
import User from "./User";
import classes from "./Users.module.css";

let Users = ({
    totalUsersCount,
    currentPage,
    pageSize,
    onPageChanged,
    users,
    followingInProgress,
    unfollow,
    follow,
    isLoading,
}) => (
    <div className={classes.users}>
        <h1 className={classes.title}>Users</h1>
        <Paginations
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChanged={onPageChanged}
        />
        {isLoading ? (
            <Prefolader />
        ) : (
            <div className={classes.items}>
                {users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                        followingInProgress={followingInProgress}
                        unfollow={unfollow}
                        follow={follow}
                    />
                ))}
            </div>
        )}
    </div>
);

export default Users;
