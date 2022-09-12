import React, {useEffect} from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profileAPI} from "../../api/api";
import userPhoto from '../../assets/images/user.png'
import s from './Profile.module.scss'

type ProfilePropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const Profile = ({profile, status, updateStatus, ...props}: ProfilePropsType ) =>{


    return (
        <div className={s.main} >
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default React.memo (Profile);