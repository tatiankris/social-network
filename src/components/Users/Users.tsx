import React from "react";

import {mapDispatchToPropsUsersType, mapStateToPropsUsersType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

import {userType} from "../../redux/users-reducer";





type UsersPropsType = mapStateToPropsUsersType & mapDispatchToPropsUsersType
// type itemsType = Array<userType>

class Users extends React.Component<UsersPropsType, Array<userType>> {

    constructor(props: UsersPropsType) {
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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {
                        pages.map(p => <span
                            className={this.props.currentPage === p ? styles.selectedPage : ""}
                            onClick={(e) => {this.onPageChanged(p)}}
                        > {p}</span>)
                    }
                </div>
                {this.props.users && this.props.users.map(u => (<div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Followed</button>
                            }
                        </div>
                    </span>
                        <span>
                        <div>
                           {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                        <span>
                        <div>
                           {"u.location.country"},
                        </div>
                        <div>
                            {"u.location.city"}
                        </div>
                    </span>
                    </div>)
                )}
            </div>
        )
    }

}

export default Users;