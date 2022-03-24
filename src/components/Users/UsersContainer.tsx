import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    userType, getUsers, getUsers2, followTC, unfollowTC,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Preloader from "../common/Preloader/Preloader";


export type UsersContainerPropsType = mapStateToPropsUsersType & mapDispatchToPropsUsersType

class UsersContainer extends React.Component <UsersContainerPropsType, Array<userType>> {

    constructor(props: UsersContainerPropsType) {
        super(props);
    }


    componentDidMount(): void {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged(page: number): void {

        this.props.getUsers2(page, this.props.pageSize);

    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader />
                    : null}
                <Users users={this.props.users}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged.bind(this)}
                       followingInProgress={this.props.followingInProgress}
                       followTC={this.props.followTC}
                       unfollowTC={this.props.unfollowTC}

                />
            </>
        )
    }
}

export type mapStateToPropsUsersType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingInProgress: Array<number>
}

let mapStateToProps = (state: AppStateType): mapStateToPropsUsersType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
        }
}

export type mapDispatchToPropsUsersType = {
    getUsers: (currentPage: number, pageSize: number) => void,
    getUsers2: (page: number, pageSize: number) => void,
    followTC: (id: number) => void,
    unfollowTC: (id: number) => void,
}



export default connect (mapStateToProps, {getUsers, getUsers2, followTC, unfollowTC}) (UsersContainer);
