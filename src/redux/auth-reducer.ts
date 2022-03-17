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

type ActionsType = ReturnType<typeof setAuthUserData>





