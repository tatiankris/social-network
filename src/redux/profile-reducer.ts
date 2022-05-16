import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {TypedDispatch} from "./redux-store";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';


export type InitialStateType = {
    posts: Array<InitialStatePostType>,
    profile: any,
    status: string,
}

export type InitialStatePostType = {
    id: number,
    message: string,
    likeCount: number
}


let profilePage = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 3},
        {id: 2, message: "It's my first post", likeCount: 6},
        {id: 3, message: "doooo", likeCount: 11},
        {id: 4, message: "mythings", likeCount: 5},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state: InitialStateType = profilePage, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {

        case ADD_POST:
            let newPost: InitialStatePostType = {
                id: 5,
                message: action.newPostBody,
                likeCount: 0,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],

            };

        case SET_USER_PROFILE: {

            return {
                ...state, profile: action.profile,
            }
        }

        case SET_PROFILE_STATUS: {

            return {
                ...state, status: action.status,
            }
        }


        default:
            return state;

    }
}


export default profileReducer;

export type ProfileActionsTypes = ReturnType<typeof addPost> |
    ReturnType<typeof onPostChange> | ReturnType<typeof setUserProfile> | ReturnType<typeof setProfileStatus>

export const addPost = (newPostBody: string) => {
    return {
        type: ADD_POST,
        newPostBody
    } as const
}

export const onPostChange = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setProfileStatus = (status: string) => {
    return {
        type: SET_PROFILE_STATUS,
        status
    } as const
}



export let getProfileData = (userId: number) => {

    return (dispatch: TypedDispatch) => {
        profileAPI.getProfileData(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export let getStatus = (userId: number) => {

    return (dispatch: TypedDispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
               dispatch(setProfileStatus(data))
            })
    }
}

export let updateStatus = (status: string) => {

    return (dispatch: TypedDispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}

