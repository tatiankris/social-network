import React from 'react';
import profileReducer, {addPost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 3},
        {id: 2, message: "It's my first post", likeCount: 6},
        {id: 3, message: "doooo", likeCount: 11},
        {id: 4, message: "mythings", likeCount: 5},
    ],
    profile: null,
    status: ""
}

test('new post should be added', () => {
    const action = addPost('I like ride a bike')
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].message).toBe('I like ride a bike')
})

test('', () => {
    const action = addPost('I like ride a bike')
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].message).toBe('I like ride a bike')
})