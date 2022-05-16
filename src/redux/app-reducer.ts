

import {Dispatch} from "redux";
import {getAuthUserDataTC, GetAuthUserDataType} from "./auth-reducer";
import {TypedDispatch} from "./redux-store";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

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
    type: "INITIALIZED_SUCCESS"
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}

export const initializeApp = () => (dispatch: TypedDispatch) => {
    let promise = dispatch(getAuthUserDataTC());
   promise.then( () => {
       dispatch(initializedSuccess());
   });


}



export default appReducer;