import React from "react";
import {NavLink} from "react-router-dom";
import {userType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/user.png'
import styles from "./Users.module.css"


type UserPropsType = {
    key: number,
    user: userType,
    followingInProgress: Array<number>,
    followTC: (id: number) => void,
    unfollowTC: (id: number) => void,
}

const User = ({user, ...props}: UserPropsType) => {
  return (
          <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed

                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {

                                                  props.unfollowTC(user.id);

                                              }}>
                                        Unfollow
                                    </button>

                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {

                                                  props.followTC(user.id);

                                              }}>
                                        Follow
                                    </button>
                            }
                        </div>
                    </span>
              <span>
                        <div>
                           {user.name}
                        </div>
                        <div>
                            {user.status}
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
          </div>
  )
}

export default User;