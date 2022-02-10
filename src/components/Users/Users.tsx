import React from "react";

import {mapDispatchToPropsUsersType, mapStateToPropsUsersType} from "./UsersContainer";
import styles from "./Users.module.css"

type UsersPropsType = mapStateToPropsUsersType & mapDispatchToPropsUsersType

const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) props.setState([
                {id: 1, firstName: "Misha", followed: false, img:"https://cdn.mos.cms.futurecdn.net/FSsqmaFEC6igagpZFnqmSZ.jpg", status: "i'm boring human", location: {country: "Belarus", city:"Minsk"}},
                {id: 2, firstName: "Vovan", followed: false, img:"https://cdn.mos.cms.futurecdn.net/FSsqmaFEC6igagpZFnqmSZ.jpg", status: "i like cars", location: {country: "Belarus", city:"Minsk"}},
                {id: 3, firstName: "Aleksey", followed: false, img:"https://cdn.mos.cms.futurecdn.net/FSsqmaFEC6igagpZFnqmSZ.jpg", status: "don't write to me", location: {country: "Belarus", city:"Minsk"}},
            ])

    return (
        <div>
            {props.users && props.users.map(u => (<div key={u.id}>
                    <span>
                        <div>
                            <img src={u.img} className={styles.userPhoto}/>
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
                           {u.firstName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                        <span>
                        <div>
                           {u.location.country},
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                    </div>)
                )}
        </div>
    )
}

export default Users;