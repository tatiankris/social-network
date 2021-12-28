import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes) => void
}

function  Profile (props: ProfilePropsType ) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts newPostText={props.profilePage.newPostText}
                     posts={props.profilePage.posts}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;