
type InitialStateType = typeof initialState;


let initialState = {
        friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
        ]
}

const sidebarReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
        return state;
}

export default sidebarReducer;


type ActionsTypes = ReturnType<typeof sidebarCreator>;
export const sidebarCreator = () => {
        return
}