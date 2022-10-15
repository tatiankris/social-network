import React, {useEffect} from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profileAPI, ProfileResponseType} from "../../api/api";
import userPhoto from '../../assets/images/user.png'
import s from './Profile.module.scss'


type ProfilePropsType = {
    profile: ProfileResponseType | null,
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (image: object) => void
}

const Profile = ({profile, status, updateStatus, isOwner, updatePhoto, ...props}: ProfilePropsType ) =>{


    return (
        <div className={s.main} >
            <ProfileInfo updatePhoto={updatePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default React.memo (Profile);