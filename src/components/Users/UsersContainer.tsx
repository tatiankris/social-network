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
import axios from "axios";
type UsersContainerPropsType = mapStateToPropsUsersType & mapDispatchToPropsUsersType

class UsersContainer extends React.Component<UsersContainerPropsType, Array<userType>> {

    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setState(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged(page: number) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setState(response.data.items);
                this.props.setCurrentPage(page);
            })
    }

    render() {
        return <Users users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
        />
    }

}

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



export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer);
