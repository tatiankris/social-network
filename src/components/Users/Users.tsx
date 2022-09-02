import React from "react";

import styles from "./Users.module.css"
import userPhoto from '../../assets/images/user.png'

import {userType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";



type UsersPropsType = {
    users: Array<userType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (page: number) => void
    followTC: (id: number) => void,
    unfollowTC: (id: number) => void,
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
                            onClick={() => props.onPageChanged(p)}
                        > {p}</span>)
                    }
                </div>
                {props.users && props.users.map(u => (<div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed

                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {

                                        props.unfollowTC(u.id);

                                    }}>
                                        Unfollow
                                    </button>

                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {

                                            props.followTC(u.id);

                                    }}>
                                        Follow
                                    </button>
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
        );
    }


export default React.memo(Users);