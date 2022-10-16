import {getAuthUserDataTC, GetAuthUserDataType} from "./auth-reducer"
import {TypedDispatch} from "./redux-store"


const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

export type AppReducerStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

const appReducer = (state: AppReducerStateType = initialState, action: ActionsType): AppReducerStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }}

export type ActionsType = InitializedSuccessType

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}

export const initializeApp = () => async (dispatch: TypedDispatch) => {
    const res = await dispatch(getAuthUserDataTC())
    res && dispatch(initializedSuccess())
}



export default appReducer;