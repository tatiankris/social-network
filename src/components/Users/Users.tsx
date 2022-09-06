import React from "react";
import styles from "./Users.module.css"
import {userType} from "../../redux/users-reducer";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

type UsersPropsType = {
    users: Array<userType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    followingInProgress: Array<number>
    followTC: (id: number) => void,
    unfollowTC: (id: number) => void,
}

    function Users ({users, followingInProgress, followTC, unfollowTC, ...props}: UsersPropsType) {

        return (
            <div>
                    <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                               currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                               portionSize={10}
                    />
                {users && users.map(u => <User key={u.id}
                          user={u}
                          followingInProgress={followingInProgress}
                          followTC={followTC}
                          unfollowTC={unfollowTC}
                    />
                )}
            </div>
        );
    }


export default React.memo(Users);