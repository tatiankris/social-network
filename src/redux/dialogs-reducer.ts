
const SEND_MESSAGE = "SEND_MESSAGE";

export type InitialStateType = typeof dialogsPage;
type InitialStateMessageType = typeof dialogsPage.messages[0];

let dialogsPage = {
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
    ]
}


const dialogsReducer = (state: InitialStateType = dialogsPage, action: ActionsTypes) => {
    switch (action.type) {

        case SEND_MESSAGE:
            const newMessage: InitialStateMessageType = {
                id: 6, message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };


        default:
            return state;
    }
}

export default dialogsReducer;

type ActionsTypes = ReturnType<typeof sendMessageAC>


export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody,
    } as const
}


