
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type InitialStateType = typeof profilePage;

export type InitialStatePostType = typeof profilePage.posts[0];


let profilePage = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 3},
        {id: 2, message: "It's my first post", likeCount: 6},
        {id: 3, message: "doooo", likeCount: 11},
        {id: 4, message: "mythings", likeCount: 5},
    ],
    newPostText: "lll"
}

const profileReducer = (state: InitialStateType = profilePage, action: ActionsTypes) => {
    switch (action.type) {

        case ADD_POST:
            let newPost: InitialStatePostType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: " ",

            };

        case UPDATE_NEW_POST_TEXT: {

           return {
               ...state,
               newPostText: action.newText,
           };
        }

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