


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
        if (action.type === "ADD-POST") {
            const newPost: postsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = " ";
            this._callbackSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callbackSubscriber(this._state);
        } else if (action.type === "ADD-MESSAGE-AC") {
            const newMessage:messagesType = {
                id: 6, message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callbackSubscriber(this._state);
        } else if (action.type === "ON-MESSAGE-CHANGE-AC") {
            this._state.dialogsPage.newMessageText = action.text;
            this._callbackSubscriber(this._state);
        }
    }
}


export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
                            ReturnType<typeof onPostChangeActionCreator> |
                                ReturnType<typeof addMessageAC> |
                                ReturnType<typeof onMessageChangeAC>

export const addPostActionCreator = () => {
    return {type: "ADD-POST"} as const
}

export const onPostChangeActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    } as const
}

export const addMessageAC = () => {
    return {type: "ADD-MESSAGE-AC"} as const
}


export const onMessageChangeAC = (text: string) => {
    return {
        type: "ON-MESSAGE-CHANGE-AC",
        text: text
    } as const
}


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



