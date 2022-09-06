import {followAPI, usersAPI} from "../api/api";
import {TypedDispatch} from "./redux-store";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_STATE = "users/SET_STATE";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS"

export type initialStateType = {
    users: Array<userType>,
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type userType = {
    id: number,
    name: string,
    followed: boolean,
    photos: PhotosType,
    status: string,
    // location: locationType
    // uniqueUrlName: string
}
export type PhotosType = {
    small: string,
    large: string,
}
export type locationType = {
    country: string,
    city: string,
}

let initialState = {
    users: [] as Array<userType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

let usersReducer = (state: initialStateType = initialState, action: UsersActionTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_STATE: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.TotalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: state.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id === action.userID)
            }
        }
        default:
            return state
    }
}


export const follow = (userID: number) => {
    return {
        type: FOLLOW,
        userID,
    } as const
}

export const unfollow = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID,
    } as const
}

export const setState = (users: Array<userType>) => {
    return {
        type: SET_STATE,
        users,
    } as const
}

export const setCurrentPage = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        page,
    } as const
}

export const setTotalUsersCount = (TotalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        TotalUsersCount,
    } as const
}

export const toggleIsFetching = (isFetching: boolean ) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    } as const
}

export const toggleIsFollowingProgress  = (isFetching: boolean, userID: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userID,
    } as const
}


export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: TypedDispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setState(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const requestCurrentUsers = (page: number, pageSize: number) => async (dispatch: TypedDispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const response = await usersAPI.getUsers2(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setState(response.items))
    dispatch(setCurrentPage(page))
}

const followUnfollowFlow = async (dispatch: TypedDispatch, apiMethod: any, actionCreator: (id: number) => UsersActionTypes, id: number) => {
    dispatch(toggleIsFollowingProgress(true, id))
    const response = await apiMethod(id)
    if (response.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowingProgress(false, id))
}

export const followTC = (id: number) => async (dispatch: TypedDispatch) => {
    followUnfollowFlow(dispatch, followAPI.follow, follow, id)
}

export const unfollowTC = (id: number) => async (dispatch: TypedDispatch) => {
    followUnfollowFlow(dispatch, followAPI.unfollow, unfollow, id)
}

export type UsersActionTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow> |
    ReturnType<typeof setState> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleIsFollowingProgress>;

export type getUsersReturnType = ReturnType<typeof requestUsers>


export default usersReducer
