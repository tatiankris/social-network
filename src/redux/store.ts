import profileReducer, {addPostActionCreator, onPostChangeActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";




export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}
export type profilePageType = {
    posts: Array<postsType>
    newPostText: string
}

export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessageText: string
}

export type sidebarType = {
    friends: Array<dialogsType>
}

export type postsType = {
    id: number
    message: string
    likeCount: number
}


export type dialogsType = {
    id: number
    name: string
}

export type messagesType = {
    id: number
    message: string
}


export type storeType = {
    _state: stateType
    getState: () => stateType
    _callbackSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likeCount: 3},
                {id: 2, message: "It's my first post", likeCount: 6},
                {id: 3, message: "doooo", likeCount: 11},
                {id: 4, message: "looove", likeCount: 5},
            ],
            newPostText: "good morning"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it?'},
                {id: 3, message: 'Goodbye'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
            ]
        }
    },
    _callbackSubscriber(state: stateType) {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: (state: stateType) => void) {
        this._callbackSubscriber = observer;
    },

    dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action);
        // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callbackSubscriber(this._state);
    }
}


export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
                            ReturnType<typeof onPostChangeActionCreator> |
                                ReturnType<typeof sendMessageCreator> |
                                ReturnType<typeof updateNewMessageBodyCreator>




export default store;



// window.store = store;

// export type ActionsTypes = addPostActionType | onPostChangeActionType
// type addPostActionType = ReturnType<typeof addPostActionCreator>
// type onPostChangeActionType = ReturnType<typeof onPostChangeActionCreator>

// let state:stateType = {
//     profilePage: {
//         posts: [
//             {id:1, message:"Hi, how are you?", likeCount:3},
//             {id:2, message:"It's my first post", likeCount:6},
//             {id:3, message:"doooo", likeCount:11},
//             {id:4, message:"looove", likeCount:5},
//         ],
//         newPostText: "good morning"
//     },
//
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrew'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Viktor'},
//             {id: 6, name: 'Valera'},
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it?'},
//             {id: 3, message: 'Goodbye'},
//             {id: 4, message: 'Yo'},
//             {id: 5, message: 'Yo'},
//         ],
//     },
//     sidebar: {
//         friends: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrew'},
//             {id: 3, name: 'Sveta'},
//         ]
//     }
// }
//
// let rerenderEntireTree = (state: stateType) => {
//     console.log('State changed')
// }
//
// export let addPost = () => {
//     const newPost: postsType = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likeCount: 0
//     }
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = " ";
//     rerenderEntireTree(state);
// }
//
// export let updateNewPostText = (newText: string) =>{
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }
//
// export const subscribe = (observer: (state: stateType) => void) => {
//     rerenderEntireTree = observer;
// }



