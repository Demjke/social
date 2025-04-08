import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        { id: 1, message: "Hi", likesCount: 10, },
        { id: 2, message: "Hello", likesCount: 20, },
    ],
    profile: null,
    isLoading: false,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 6,
                    message: action.newPostText,
                    likesCount: 0
                }],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

export const addPostCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const toggleIsLoading = isLoading => ({ type: TOGGLE_IS_LOADING, isLoading });
export const setStatus = status => ({ type: SET_STATUS, status });

export const getUserProfile = userId => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
    dispatch(toggleIsLoading(false));
};

export const getStatus = userId => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    response.data && dispatch(setStatus(response.data));

};

export const updateStatus = status => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) dispatch(setStatus(status));
};

export default profileReducer;
