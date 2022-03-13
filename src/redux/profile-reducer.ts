
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE';


export type InitialStateType = {
    posts: Array<InitialStatePostType>,
    newPostText: string,
    profile: any,
}

export type InitialStatePostType = {
    id: number,
    message: string,
    likeCount: number
}




let profilePage = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 3},
        {id: 2, message: "It's my first post", likeCount: 6},
        {id: 3, message: "doooo", likeCount: 11},
        {id: 4, message: "mythings", likeCount: 5},
    ],
    newPostText: "null",
    profile: null,
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

        case SET_USER_PROFILE: {

            return {
                ...state, profile: action.profile,
            }
        }

        default:
            return state;

    }
}


export default profileReducer;

type ActionsTypes = ReturnType<typeof addPost> |
    ReturnType<typeof onPostChange> | ReturnType<typeof setUserProfile>

export const addPost = () => {
    return {type: ADD_POST} as const
}

export const onPostChange = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
