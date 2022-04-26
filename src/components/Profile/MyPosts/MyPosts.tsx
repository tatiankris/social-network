import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {InitialStatePostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


type MyPostsPropsType = {
    posts: Array<InitialStatePostType>
    addPost: (newPostBody: string) => void
}

const  MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>)


    const addNewPost = (values: addNewPostFormType) => {
        // alert(values.newPostBody)
        props.addPost(values.newPostBody);
        values.newPostBody = "";
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export type addNewPostFormType = {
    newPostBody: string;
}

const maxLength10 = maxLengthCreater(10);

const AddNewPostForm: React.FC<InjectedFormProps<addNewPostFormType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newPostBody"} placeholder={"Enter your post"}
                    validate={[required, maxLength10]}
            ></Field>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddNewPostFormRedux = reduxForm<addNewPostFormType>({form: 'profileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts;

