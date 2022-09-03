import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const Profile = ({profile, status, updateStatus, ...props}: ProfilePropsType ) =>{
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default React.memo (Profile);