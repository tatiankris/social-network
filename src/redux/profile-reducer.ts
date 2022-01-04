import {ActionsTypes, postsType, profilePageType} from "./state";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


const profileReducer = (state: profilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postsType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = " ";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;

    }
}


export default profileReducer;

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}

export const onPostChangeActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}