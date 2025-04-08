import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

// users-reducer
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", { followed: true })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", { followed: false })
            };
        case SET_USERS:
            return { ...state, users: action.users, };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage, };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count, };
        case TOGGLE_IS_LOADING:
            return { ...state, isLoading: action.isLoading, };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const followSuccess = userID => ({ type: FOLLOW, userID });
export const unfollowSuccess = userID => ({ type: UNFOLLOW, userID });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsLoading = isLoading => ({ type: TOGGLE_IS_LOADING, isLoading });
export const toggleIsFollowingInProgress = (isLoading, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isLoading, userId });

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    dispatch(setCurrentPage(currentPage));
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsLoading(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) dispatch(actionCreator(userId));
    dispatch(toggleIsFollowingInProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);

export const unfollow = (userId) => async (dispatch) => followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);

export default usersReducer;
