import {profileAPI, ProfileResponseType, updateProfileDataType} from "../api/api";
import {AppStateType, TypedDispatch} from "./redux-store";
import {disconnect} from "cluster";
import {FormDataType} from "../components/Profile/ProfileInfo/ProfileInfo";


const ADD_POST = "profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS';


export type InitialStateType = {
    posts: Array<InitialStatePostType>,
    profile: ProfileResponseType | null,
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


    return async (dispatch: TypedDispatch) => {
        const data = await profileAPI.getProfileData(userId)
    dispatch(setUserProfile(data))

    }
}

export const updateProfile = (formData: FormDataType) => async (dispatch: TypedDispatch, getState: any) => {
    const state = getState() as AppStateType
    if (state.profilePage.profile) {
        const id = state.profilePage.profile?.userId
        const fullName = state.profilePage.profile?.fullName
        const requestData: updateProfileDataType = {
            userId: id,
            aboutMe: formData.aboutMe ? formData.aboutMe : 'some',
            lookingForAJob: formData.lookingForAJob,
            lookingForAJobDescription: 'some',
            fullName: fullName,
            contacts: {
                github: formData.github,
                vk: formData.vk,
                facebook: formData.facebook,
                instagram: formData.instagram,
                twitter: formData.twitter,
                website: formData.website,
                youtube: formData.youtube,
                mainLink: formData.mainLink
            }
        }

        const data = await profileAPI.updateProfile(requestData)
        if (data.resultCode === 0) {
            dispatch(getProfileData(id));
        }
        else alert('Error: resultCode = 1')
    }
    else alert('Error: profile is null!')
}
export let getStatus = (userId: number) => {
    return async (dispatch: TypedDispatch) => {
        const data = await profileAPI.getStatus(userId)
        dispatch(setProfileStatus(data))
    }
}
export let updateStatus = (status: string) => {
    return async (dispatch: TypedDispatch) => {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    }
}
export let updatePhoto = (image: any) => {
    return async (dispatch: TypedDispatch, getState: any) => {
        const state = getState() as AppStateType
        const id = state.profilePage.profile?.userId
        const data = await profileAPI.updatePhoto(image)
        if (data.resultCode === 0) {
            if (id) {
                dispatch(getProfileData(id))
            }

        }
    }
}

