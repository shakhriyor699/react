const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
 const dialogsReducer = (state, action) => {
    

    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessagePost,
            }
            state.messagesData.push(newMessage)
            state.newMessagePost = ''
            return state
        case UPDATE_MESSAGE:
            state.newMessagePost = action.newMessage
            return state;
        default:
            return state
    }


}

export const addMessageActionCreater = () => ({
    type: ADD_MESSAGE
})
export const updateMessageActionCreater = (value) => ({
    type: UPDATE_MESSAGE,
    newMessage: value
})

export default dialogsReducer