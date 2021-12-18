import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function Profile (props: ProfilePropsType ) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts newPostText={props.profilePage.newPostText}
                     posts={props.profilePage.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;