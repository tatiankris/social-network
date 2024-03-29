import {authAPI, profileAPI} from "../api/api";
import {FormDataType} from "../components/Login/Login";
import {stopSubmit} from "redux-form";
import {TypedDispatch} from "./redux-store";
import {getProfileData} from "./profile-reducer";


const SET_USER_DATA = "auth/SET_USER_DATA";


export type LoginDataType ={
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export type authReducerStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
    captcha: string | null
}

export type GetAuthUserDataType = ReturnType<typeof getAuthUserDataTC>

let initialState = {
    id: 2,
    email: "",
    login: "",
    isAuth: false,
    captcha: null
}


const authReducer = (state: authReducerStateType = initialState, action: AuthActionsType): authReducerStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
            case 'SET_CAPTCHA':
            return {
                ...state,
                captcha: action.url
            }

        default:
            return state
    }}

export default authReducer;


export type AuthActionsType = setAuthUserDataType | ReturnType<typeof setCaptchaAC>

type setAuthUserDataType = {
    type: typeof SET_USER_DATA,
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
export const setCaptchaAC = (url: string) => {
    return {
        type: 'SET_CAPTCHA',
        url
    } as const
}

export let getAuthUserDataTC = () => async (dispatch: TypedDispatch) => {
const response = await authAPI.getAuthUserData()
            if (response.data.resultCode === 0) {
                let {id ,email, login} = response.data.data;
                dispatch(setAuthUserData(id ,email, login, true))
            }
            return response
}

export let loginTC = ({email, password, rememberMe, captcha}: FormDataType) => async (dispatch: TypedDispatch) => {
const response = await authAPI.login({email, password, rememberMe, captcha})
            if (response.data.resultCode === 0)
            {
                let id = response.data.data.userId;
                console.log(response.data.data)  /////////////////////////////Почему-то в консоли видим только id
                dispatch(setAuthUserData(id, email, email, true))
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: message}))
            }
        }


export let logoutTC = () => async (dispatch: TypedDispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(0, "null", "null", false))
    }
}
export let setCaptchaTC = () => async (dispatch: TypedDispatch) => {
    const res = await authAPI.getCaptcha()
    console.log('Captcha' + res.data.url)
    dispatch(setCaptchaAC(res.data.url));
}












