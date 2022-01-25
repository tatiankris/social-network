import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {
    postsType
} from "../../../redux/store";


type MyPostsPropsType = {
    posts: Array<postsType>
    newPostText: string
    addPost: () => void
    onPostChange: (text: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>)


    const addPost = () => {
            props.addPost();
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onPostChange(text);
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