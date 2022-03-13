import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, toggleIsFetching,
    setCurrentPage,
    setState,
    setTotalUsersCount,
    unfollow,
    userType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import preloader from "../../assets/images/preloader.gif"
import Preloader from "../common/Preloader/Preloader";

export type UsersContainerPropsType = mapStateToPropsUsersType & mapDispatchToPropsUsersType

class UsersContainer extends React.Component <UsersContainerPropsType, Array<userType>> {

    constructor(props: UsersContainerPropsType) {
        super(props);
    }


    componentDidMount(): void {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setState(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged(page: number): void {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setState(response.data.items);
                this.props.setCurrentPage(page);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader />
                    : null}
        <Users users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged.bind(this)}
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
}

let mapStateToProps = (state: AppStateType): mapStateToPropsUsersType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        }
}

export type mapDispatchToPropsUsersType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setState: (users: Array<userType>) => void,
    setCurrentPage: (page: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
}



export default connect (mapStateToProps, {follow, unfollow, setState, setCurrentPage, setTotalUsersCount, toggleIsFetching}) (UsersContainer);
