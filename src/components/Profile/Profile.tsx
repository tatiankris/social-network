import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Store} from "redux";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: Store
}

function  Profile (props: ProfilePropsType ) {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;