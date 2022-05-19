import {AppStateType} from "./redux-store";
import {userType} from "./users-reducer";
import {createSelector} from "reselect";


const getUsersSelector = (state: AppStateType): Array<userType>  => {
    return state.users.users
}
export const getUsers = createSelector(getUsersSelector, (
    (users) => {
    return users
}))


export const getPageSize = (state: AppStateType): number => {
    return state.users.pageSize
}

export const getTotalUsersCount = (state: AppStateType): number => {
    return state.users.totalUsersCount
}

export const getCurrentPage = (state: AppStateType): number => {
    return state.users.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.users.isFetching
}

export const getFollowingInProgress = (state: AppStateType): Array<number> => {
    return state.users.followingInProgress
}
