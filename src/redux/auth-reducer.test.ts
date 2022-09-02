import React from 'react';
import dialogsReducer, {sendMessageAC} from "./dialogs-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";

let state = {
    id: 2,
    email: "null",
    login: "null",
    isAuth: false
}

test('user data should be added', () => {
    const action = setAuthUserData(3, 'email', 'login', true)
    const newState = authReducer(state, action)

    expect(newState.id).toBe(3)
    expect(newState.email).toBe('email')
    expect(newState.login).toBe('login')
    expect(newState.isAuth).toBe(true)
})