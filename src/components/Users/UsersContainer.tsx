import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setStateAC,
    setTotalUsersCountAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

export type mapStateToPropsUsersType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

let mapStateToProps = (state: AppStateType): mapStateToPropsUsersType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        }
}

export type mapDispatchToPropsUsersType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setState: (users: Array<userType>) => void,
    setCurrentPage: (page: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsUsersType => {
 return {
     follow: (userID: number) => dispatch(followAC(userID)),
     unfollow: (userID: number) => dispatch(unfollowAC(userID)),
     setState: (users: Array<userType>) => dispatch(setStateAC(users)),
     setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
     setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
 }
}

let UserContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UserContainer;
