
const ADD_MESSAGE_AC = "ADD-MESSAGE-AC";
const ON_MESSAGE_CHANGE_AC = "ON-MESSAGE-CHANGE-AC";

type InitialStateType = typeof initialState;
type InitialStateMessageType = typeof initialState.messages[0];

let initialState = {
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
}


const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE_AC:
            const newMessage: InitialStateMessageType = {
                id: 6, message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case ON_MESSAGE_CHANGE_AC:
            state.newMessageText = action.text;
            return state;

        default:
            return state;
    }
}

export default dialogsReducer;

type ActionsTypes = ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => {
    return {type: ADD_MESSAGE_AC} as const
}


export const updateNewMessageBodyCreator = (text: string) => {
    return {
        type: ON_MESSAGE_CHANGE_AC,
        text: text
    } as const
}