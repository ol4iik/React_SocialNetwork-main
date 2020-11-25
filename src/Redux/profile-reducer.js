import { act } from "react-dom/test-utils";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_STATUS = 'SET-STATUS';
const SET_PROFILE = 'SET-PROFILE';


const initial = {
    profile: null,
    userStatus: 'No status',
    posts: [
        { id: 1, message: "post1", like: 0 },
        { id: 2, message: "post2", like: 2 }
    ],
    newPostText: ''
}

const ProfilePage = (state = initial, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                if (state.newPostText !== '') {
                    return {
                        ...state,
                        posts: [...state.posts, { id: 3, message: state.newPostText, like: 0 }]
                    }
                }
            }
        case UPDATE_POST_TEXT:
            {
                return {
                    ...state,
                    newPostText: action.newPostText
                }
            }
        case SET_STATUS:
            {
                return {
                    ...state,
                    userStatus: action.newStatus
                }
            }
        case SET_PROFILE:
            {
                return {
                    ...state,
                    profile: action.profile
                }
            }
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updatePostText = (newPostText) => ({ type: UPDATE_POST_TEXT, newPostText });
const setStatus = (newStatus) => ({ type: SET_STATUS, newStatus });
const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const getProfileThunk = (userId) => async(dispatch) => {
    let response = await profileAPI.getProfileData(userId);
    dispatch(setProfile(response));
}

export const setStatusThunk = (userId) => async(dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
}

export const updateStatusThunk = (status) => async(dispatch) => {

    let response = await profileAPI.putStatus(status);
    (response.resultCode === 0) && dispatch(setStatus(status));
}

export default ProfilePage;