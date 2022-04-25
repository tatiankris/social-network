import {Dispatch} from "redux";
import {authAPI, followAPI, usersAPI} from "../api/api";
import {locationType, setCurrentPage, setState, setTotalUsersCount, toggleIsFetching} from "./users-reducer";
import {FormDataType} from "../components/Login/Login";

const SET_USER_DATA = "SET_USER_DATA";
const LOGIN = 'LOGIN';

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
    email: 'null',
    login: 'null',
    isAuth: false
}


const authReducer = (state: authReducerStateType = initialState, action: ActionsType) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        // case LOGIN:
        //     return {
        //         ...state,
        //         id: action.userID,
        //         isAuth: true
        //     }

        default:
            return state
    }}

export default authReducer;

export const setAuthUserData = (email: string, id: number, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    }
}

// export const loginAC = (userID: number): LoginACType => {
//     return {
//         type: LOGIN,
//         userID: userID
//     } as const
// }

export let authAPITC = () => {

    return (dispatch: Dispatch) => {

        authAPI.getAuthUserData()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data;
                    dispatch(setAuthUserData(email, id, login));
                }
            })
    }}

// export let loginTC = (formData: FormDataType) => {
//
//     return (dispatch: Dispatch) => {
//
//         authAPI.login(formData)
//             .then(data => {
//                 if (data.data.userID)
//                 {
//                     dispatch(loginAC(data.data.userID));
//                 }
//             })
//     }}


type ActionsType = setAuthUserDataType | LoginACType

type setAuthUserDataType = {
    type: 'SET_USER_DATA',
    data: {
        id: number,
        email: string,
        login: string}
}

type LoginACType = {
    type: 'LOGIN',
    userID: number
}






