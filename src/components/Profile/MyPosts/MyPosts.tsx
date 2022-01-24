import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {
    ActionsTypes,
    postsType
} from "../../../redux/store";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<postsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>)


    const addPost = () => {
            props.dispatch(addPostActionCreator());
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch(onPostChangeActionCreator(text));
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                              ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;