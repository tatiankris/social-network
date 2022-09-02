import React from "react";
import MyPosts from "./MyPosts";
import {
    addPost,
    InitialStatePostType,
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: Array<InitialStatePostType>;
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

type mapDispatchToPropsType = {
    addPost: (newPostBody: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostBody: string) => {
            dispatch(addPost(newPostBody))
        }
}}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;