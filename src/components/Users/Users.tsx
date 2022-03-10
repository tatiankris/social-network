import React from "react";

import styles from "./Users.module.css"
import userPhoto from '../../assets/images/user.png'

import {userType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<userType>
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}


function Users (props: UsersPropsType) {


        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {
                        pages.map(p => <span
                            className={props.currentPage === p ? styles.selectedPage : ""}
                            onClick={(e) => {props.onPageChanged(p)}}
                        > {p}</span>)
                    }
                </div>
                {props.users && props.users.map(u => (<div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Followed</button>
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


export default Users;