const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Vitaliy" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Kate" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Kostya" },
    ],
    messages: [
        { id: 1, message: "How are you" },
        { id: 2, message: "Sorry" },
        { id: 3, message: "message" },
        { id: 4, message: "Huo" },
        { id: 5, message: "Lao" },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    message: action.newMessageBody
                }],
            };
        default:
            return state;
    }
};

export const addMessageCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogsReducer;
