import {getAuthUserDataTC, GetAuthUserDataType} from "./auth-reducer"
import {TypedDispatch} from "./redux-store"
import {Dispatch} from "redux";


const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

export type AppReducerStateType = {
    initialized: boolean
    appError: boolean
}

let initialState = {
    initialized: false,
    appError: false
}

const appReducer = (state: AppReducerStateType = initialState, action: ActionsType): AppReducerStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
          //  debugger
        case 'SET_APP_ERROR':
            return  {
                ...state,
                appError: action.appError
            }
        default:
            return state
    }}

export type ActionsType = InitializedSuccessType | ReturnType<typeof setAppErrorAC>

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}

export const setAppErrorAC = (appError: boolean) => {
    return {
        type: 'SET_APP_ERROR',
        appError
    } as const
}

export const setAppErrorTC = () => async (dispatch: Dispatch) => {
    // debugger
    dispatch(setAppErrorAC(true))
    setTimeout(()=> {
        dispatch(setAppErrorAC(false))
    }, 6000)
}



export const initializeApp = () => async (dispatch: TypedDispatch) => {
    const res = await dispatch(getAuthUserDataTC())
    res && dispatch(initializedSuccess())
}



export default appReducer;