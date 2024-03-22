import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hellow! World!', likesCount: 4},
        {id: 2, message: 'It\'s my first page', likesCount: 23},
        {id: 3, message: 'Second Post', likesCount: 11},
        {id: 4, message: 'Hi world Second vez', likesCount: 12},
    ]
}

test('test: length posts', () => {
    let action = addPostActionCreator("new test post");
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5);
});

test('test: text new post', () => {
    let action = addPostActionCreator("new test post");
    let newState = profileReducer(state, action);
    expect(newState.postsData[4].message).toBe("new test post");
});

test('test: length posts after deleting', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});
