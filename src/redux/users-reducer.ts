
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_STATE = "SET_STATE";

export type initialStateType = typeof initialState;
export type userType = {
    id: number,
    name: string,
    followed: boolean,
    photos: PhotosType,
    status: string,
    location: locationType
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
            return {...state, users: [...state.users, ...action.users]}
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

export type ActionTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setStateAC>;

export default usersReducer;
