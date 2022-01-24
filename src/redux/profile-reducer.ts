
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type InitialStateType = typeof initialState;

type InitialStatePostType = typeof initialState.posts[0];

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 3},
        {id: 2, message: "It's my first post", likeCount: 6},
        {id: 3, message: "doooo", likeCount: 11},
        {id: 4, message: "looove", likeCount: 5},
    ],
    newPostText: "good morning"
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: InitialStatePostType = {
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

type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof onPostChangeActionCreator>

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}

export const onPostChangeActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}