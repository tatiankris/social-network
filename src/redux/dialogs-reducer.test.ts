import React from 'react';
import dialogsReducer, {sendMessageAC} from "./dialogs-reducer";

let state = {
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

test('new message should be added', () => {
    const action = sendMessageAC('hello man')
    const newState = dialogsReducer(state, action)

    expect(newState.messages[5].message).toBe('hello man')
})