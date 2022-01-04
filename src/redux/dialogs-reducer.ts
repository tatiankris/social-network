import {ActionsTypes, dialogsPageType, messagesType} from "./state";
const ADD_MESSAGE_AC = "ADD-MESSAGE-AC";
const ON_MESSAGE_CHANGE_AC = "ON-MESSAGE-CHANGE-AC";

const dialogsReducer = (state: dialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE_AC:
            const newMessage: messagesType = {
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

export const sendMessageCreator = () => {
    return {type: ADD_MESSAGE_AC} as const
}


export const updateNewMessageBodyCreator = (text: string) => {
    return {
        type: ON_MESSAGE_CHANGE_AC,
        text: text
    } as const
}