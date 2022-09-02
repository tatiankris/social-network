import usersReducer, {follow, toggleIsFetching, toggleIsFollowingProgress, unfollow, userType} from "./users-reducer";
import dialogsReducer, {sendMessageAC} from "./dialogs-reducer";

let state = {
    users: [
        {
            id: 1,
            name: 'Ann',
            followed: false,
            photos: {
                small: '*/',
                large: '**/',
            },
            status: 'happy',
        },
        {
            id: 2,
            name: 'Max',
            followed: true,
            photos: {
                small: '*/',
                large: '**/',
            },
            status: 'boring',
        },
    ],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

test('user should to be following', () => {
    const action = follow(1)
    const newState = usersReducer(state, action)

    expect(newState.users[0].followed).toBe(true)
    expect(newState.users[0].id).toBe(1)
})

test('user should to be unfollowing', () => {
    const action = unfollow(2)
    const newState = usersReducer(state, action)

    expect(newState.users[1].followed).toBe(false)
    expect(newState.users[1].id).toBe(2)
})

test('isFetching should to be true', () => {
    const action = toggleIsFetching(true)
    const newState = usersReducer(state, action)

    expect(newState.isFetching).toBe(true)
})

test('followingInProgress should work correct', () => {
    const action = toggleIsFollowingProgress(state.isFetching, 1)
    const newState = usersReducer(state, action)

    const isFetchingAction = toggleIsFetching(true)
    const isFetchingState = usersReducer(state, isFetchingAction)

    const secondAction = toggleIsFollowingProgress(isFetchingState.isFetching, 2)
    const secondState = usersReducer(isFetchingState, secondAction)

    expect(newState.followingInProgress.length).toBe(0)
    expect(secondState.followingInProgress.length).toBe(1)
    expect(secondState.followingInProgress[0]).toBe(2)

})


