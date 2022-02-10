import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setStateAC, unfollowAC, userType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

export type mapStateToPropsUsersType = {
    users: Array<userType>,
}

let mapStateToProps = (state: AppStateType): mapStateToPropsUsersType => {
    return {
        users: state.users.users,
}
}

export type mapDispatchToPropsUsersType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setState: (users: Array<userType>) => void,
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsUsersType => {
 return {
     follow: (userID: number) => dispatch(followAC(userID)),
     unfollow: (userID: number) => dispatch(unfollowAC(userID)),
     setState: (users: Array<userType>) => dispatch(setStateAC(users)),
 }
}

let UserContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UserContainer;
