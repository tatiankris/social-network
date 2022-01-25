import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Store} from "redux";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {

}

function  Profile (props: ProfilePropsType ) {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;