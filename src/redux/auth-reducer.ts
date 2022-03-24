import {Dispatch} from "redux";
import {authAPI, followAPI, usersAPI} from "../api/api";
import {setCurrentPage, setState, setTotalUsersCount, toggleIsFetching} from "./users-reducer";

const SET_USER_DATA = "SET_USER_DATA";

export type authReducerStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
}

let initialState = {
    id: 0,
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
            };

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

type ActionsType = ReturnType<typeof setAuthUserData>








