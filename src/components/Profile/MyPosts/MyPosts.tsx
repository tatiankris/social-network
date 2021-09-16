import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {posts} from "../../../index";


function MyPosts() {

    let postsElements = posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;