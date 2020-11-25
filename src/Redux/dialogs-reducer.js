const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
let count = 4;
const initial = {

    messages: [
        { id: 1, message: 'Hello it`s me' },
        { id: 2, message: 'Hi it`s me' },
        { id: 3, message: 'it`s me' },
        { id: 4, message: 'Me' }
    ],
    newMessageText: ''
}

const DialogsPage = (state = initial, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            {
                count++;
                if (state.newMessageText !== '') {
                    return {
                        ...state,
                        messages: [...state.messages, { id: count, message: state.newMessageText }]
                    }
                }

            }
        case UPDATE_NEW_MESSAGE_TEXT:
            {
                return {
                    ...state,
                    newMessageText: action.newMessageText
                }
            }

        default:
            return state;
    }
}

export const addMessage = () => ({ type: ADD_MESSAGE });
export const updateMessageText = (newMessageText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText });

export default DialogsPage;