import { render, screen } from '@testing-library/react';
import App from './App';
import { updateMessageText } from './Redux/dialogs-reducer';
import ProfilePage, { addPost, updatePostText } from './Redux/profile-reducer';

// test('renders learn react link', () => {
//     render( < App / > );
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

test('Update post text', () => {
    let action = updatePostText('hello');
    expect(action.newPostText).toBe('hello');
});


test('Do not post empty post', () => {
    let action = addPost();
    const state = {
        profile: null,
        userStatus: 'No status',
        posts: [
            { id: 1, message: "post1", like: 0 },
            { id: 2, message: "post2", like: 2 }
        ],
        newPostText: ''
    }
    let newState = ProfilePage(state, action);
    expect(newState.posts.length).toBe(2);
});

test('Add message', () => {
    let action = updateMessageText('hello');
    expect(action.newMessageText).toBe('hello');
});