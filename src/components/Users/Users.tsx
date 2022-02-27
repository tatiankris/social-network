import React from "react";

import {mapDispatchToPropsUsersType, mapStateToPropsUsersType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

type UsersPropsType = mapStateToPropsUsersType & mapDispatchToPropsUsersType

const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setState(response.data.items);
        })
    }

    return (
        <div>
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