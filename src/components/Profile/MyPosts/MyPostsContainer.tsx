import React from "react";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

type MyPostsPropsType = {

}

const MyPostsContainer = (props: MyPostsPropsType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const onPostChange = (text: string) => {
                    store.dispatch(onPostChangeActionCreator(text));
                }
                return (
                    <MyPosts posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}
                             addPost={addPost}
                             onPostChange={onPostChange}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;