import React from "react";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    store: Store
}

const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.store.getState();

    const addPost = () => {
            props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(onPostChangeActionCreator(text));
    }


    return (
       <MyPosts posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
                addPost={addPost}
                onPostChange={onPostChange}/>
    )
}

export default MyPostsContainer;