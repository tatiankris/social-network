import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


function MyPosts() {

    type postDataType = {
        id: number;
        message: string;
        likeCount: number;
    }

    let posts:Array<postDataType> = [
        {id:1, message:"Hi, how are you?", likeCount:3},
        {id:2, message:"It's my first post", likeCount:6},
        {id:2, message:"doooo", likeCount:11},
        {id:2, message:"looove", likeCount:5},
    ]

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