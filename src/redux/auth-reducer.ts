import {Dispatch} from "redux";
import {authAPI, followAPI, usersAPI} from "../api/api";
import {locationType, setCurrentPage, setState, setTotalUsersCount, toggleIsFetching} from "./users-reducer";
import {FormDataType} from "../components/Login/Login";

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

let initialState = {
    id: 2,
    email: "null",
    login: "null",
    isAuth: false
}


const authReducer = (state: authReducerStateType = initialState, action: ActionsType) => {
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


type ActionsType = setAuthUserDataType

type setAuthUserDataType = {
    type: 'SET_USER_DATA',
    payload: {
        id: number,
        email: string,
        login: string,
        isAuth: boolean
    }

}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    }
}

export let authAPITC = () => {

    return (dispatch: Dispatch) => {
        authAPI.getAuthUserData()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data;
                    dispatch(setAuthUserData(email, id, login, true));
                }
            })
    }}

export let loginTC = ({email, password, rememberMe}: FormDataType) => {

    return (dispatch: Dispatch) => {
        authAPI.login({email, password, rememberMe})
            .then(response => {
                if (response.data.resultCode === 0)
                {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })}
}

export let logoutTC = () => {

    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0)
                {
                    dispatch(setAuthUserData(0, "null", "null", false));
                }
            })}
}











