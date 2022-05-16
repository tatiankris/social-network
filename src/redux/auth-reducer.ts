import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {FormDataType} from "../components/Login/Login";
import {stopSubmit} from "redux-form";
import {TypedDispatch} from "./redux-store";


const SET_USER_DATA = "SET_USER_DATA";


export type LoginDataType ={
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

export type authReducerStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
}

export type GetAuthUserDataType = ReturnType<typeof getAuthUserDataTC>

let initialState = {
    id: 2,
    email: "null",
    login: "null",
    isAuth: false
}


const authReducer = (state: authReducerStateType = initialState, action: AuthActionsType): authReducerStateType => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }}

export default authReducer;


export type AuthActionsType = setAuthUserDataType

type setAuthUserDataType = {
    type: 'SET_USER_DATA',
    payload: {
        id: number,
        email: string,
        login: string,
        isAuth: boolean
    }

}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean): setAuthUserDataType => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    }
}

export let getAuthUserDataTC = () => (dispatch: TypedDispatch) => {
        return authAPI.getAuthUserData()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id ,email, login} = response.data.data;
                    dispatch(setAuthUserData(id ,email, login, true));
                }
            })

    }

export let loginTC = ({email, password, rememberMe}: FormDataType) => (dispatch: TypedDispatch) => {
        return authAPI.login({email, password, rememberMe})
            .then(response => {
                if (response.data.resultCode === 0)
                {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true));
                } else {
                    const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                    dispatch(stopSubmit('login', {_error: message}));
                }
            })}


export let logoutTC = () => {

    return (dispatch: TypedDispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0)
                {
                    dispatch(setAuthUserData(0, "null", "null", false));
                }
            })}
}











