import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {UsersActionTypes} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer"
import {ActionsType} from "./app-reducer"
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionType = ActionsType | AuthActionsType | DialogsActionsTypes | ProfileActionsTypes | UsersActionTypes

export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store;



