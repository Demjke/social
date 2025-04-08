import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../../hoc/WithAuthRedirect";
import { follow, getUsers, setCurrentPage, unfollow } from "../../../store/users-reducer";
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
} from "../../../store/users-selectors";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = pageNumber => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isLoading={this.props.isLoading}
                followingInProgress={this.props.followingInProgress}
            />
        );
    }
}

let mapStateToProps = state => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers }),
    WithAuthRedirect
)(UsersContainer);
