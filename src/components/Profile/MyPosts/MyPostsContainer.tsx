import React from "react";
import MyPosts from "./MyPosts";
import {
    addPost,
    InitialStatePostType,
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import store, {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

// type MyPostsPropsType = {
//
// }
//
// const MyPostsContainer = (props: MyPostsPropsType) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//
//                 let state = store.getState();
//
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//
//                 const onPostChange = (text: string) => {
//                     store.dispatch(onPostChangeActionCreator(text));
//                 }
//                 return (
//                     <MyPosts posts={state.profilePage.posts}
//                              newPostText={state.profilePage.newPostText}
//                              addPost={addPost}
//                              onPostChange={onPostChange}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }


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