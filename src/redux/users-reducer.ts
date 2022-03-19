
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_STATE = "SET_STATE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export type initialStateType = typeof initialState;
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
}

let usersReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {

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

export type ActionTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow> |
                            ReturnType<typeof setState> | ReturnType<typeof setCurrentPage> |
                                ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching>;


export default usersReducer;
