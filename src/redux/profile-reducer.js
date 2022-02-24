const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
 const profileReducer = (state, action) => {
    

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newTextPost,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newTextPost = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newTextPost = action.newText;
            return state;
        default:
            return state
    }

}

export const addPostActionCreater = () => ({
    type: ADD_POST
})


export const updateNewPostTextActionCreater = (value) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: value
})

export default profileReducer