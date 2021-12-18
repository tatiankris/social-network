export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}
export type profilePageType = {
    posts: Array<postsType>
}

export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
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


let state:stateType = {
    profilePage: {
        posts: [
            {id:1, message:"Hi, how are you?", likeCount:3},
            {id:2, message:"It's my first post", likeCount:6},
            {id:3, message:"doooo", likeCount:11},
            {id:4, message:"looove", likeCount:5},
        ],
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
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
        ]
    }
}

export let addPost = (postMessage: string) => {
    const newPost: postsType = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
}

export default state;




