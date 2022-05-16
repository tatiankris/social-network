import {Dispatch} from "redux";
import {followAPI, usersAPI} from "../api/api";
import {TypedDispatch} from "./redux-store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_STATE = "SET_STATE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

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
type PhotosType = {
    small: string,
    large: string,
}
export type locationType = {
    country: string,
    city: string,
}

let initialState = {
    users: [] as Array<userType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

let usersReducer = (state: initialStateType = initialState, action: UsersActionTypes): initialStateType => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            };

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => u.id ===  action.userID ? {...u, followed: false} : u)
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


export let follow = (userID: number) => {
    return {
        type: FOLLOW,
        userID,
    } as const
}

export let unfollow = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID,
    } as const
}

export let setState = (users: Array<userType>) => {
    return {
        type: SET_STATE,
        users,
    } as const
}

export let setCurrentPage = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        page,
    } as const
}

export let setTotalUsersCount = (TotalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        TotalUsersCount,
    } as const
}

export let toggleIsFetching = (isFetching: boolean ) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    } as const
}

export let toggleIsFollowingProgress  = (isFetching: boolean, userID: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userID,
    } as const
}


export let getUsers = (currentPage: number, pageSize: number) => {

    return (dispatch: TypedDispatch) => {

        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setState(data.items));
                dispatch(setTotalUsersCount(data.totalCount));

            })};
}

export let getUsers2 = (page: number, pageSize: number) => {

    return (dispatch: TypedDispatch) => {

        dispatch(toggleIsFetching(true));
        usersAPI.getUsers2(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setState(data.items));
                dispatch(setCurrentPage(page));
            })

    }};

export let followTC = (id: number) => {

    return (dispatch: TypedDispatch) => {

        dispatch(toggleIsFollowingProgress(true, id))
        followAPI.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id));
                }
                dispatch(toggleIsFollowingProgress(false, id))
            })

    }};

export let unfollowTC = (id: number) => {

    return (dispatch: TypedDispatch) => {

        dispatch(toggleIsFollowingProgress(true, id));
        followAPI.unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id));
                }
                dispatch(toggleIsFollowingProgress(false, id))
            })

    }};

export type UsersActionTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow> |
                            ReturnType<typeof setState> | ReturnType<typeof setCurrentPage> |
                                ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> |
                                    ReturnType<typeof toggleIsFollowingProgress>;

export type getUsersReturnType = ReturnType<typeof getUsers>


export default usersReducer;
