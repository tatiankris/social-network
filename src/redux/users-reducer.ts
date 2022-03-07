
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_STATE = "SET_STATE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

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
}

let usersReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (action.userID === u.id) {
                            return {...u, followed: true}
                        } else
                            return u
                    }
                )
            };

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (action.userID === u.id) {
                            return {...u, followed: false}
                        } else
                            return u
                    }
                )
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

        default:
            return state
    }
}


export let followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID,
    } as const
}

export let unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID,
    } as const
}

export let setStateAC = (users: Array<userType>) => {
    return {
        type: SET_STATE,
        users,
    } as const
}

export let setCurrentPageAC = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        page,
    } as const
}

export let setTotalUsersCountAC = (TotalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        TotalUsersCount,
    } as const
}

export type ActionTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |
                            ReturnType<typeof setStateAC> | ReturnType<typeof setCurrentPageAC> |
                                ReturnType<typeof setTotalUsersCountAC>;


export default usersReducer;
