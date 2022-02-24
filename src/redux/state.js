import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"


let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, post: 'Hi, how are you?', likesCount: 12 },
                { id: 2, post: 'It\'s my first post', likesCount: 11 },
                { id: 3, post: 'blala', likesCount: 11 },
                { id: 4, post: 'dada', likesCount: 15 },
            ],
            newTextPost: 'it-kamasutra.com'

        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Dymich' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' }
            ],
            newMessagePost: 'it'
        },
        sidebar: {
            sideBarInfo: [
                { id: 1, link: '/profile', linkName: 'Profile' },
                { id: 2, link: '/dialogs', linkName: 'Messages' },
                { id: 3, link: '/news', linkName: 'News' },
                { id: 4, link: '/music', linkName: 'Music' },
                { id: 5, link: '/settings', linkName: 'Settings' },
            ]
        }

    },
    _rerenderTree() {
        console.log('State is changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderTree = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._rerenderTree(this._state)
    }
}




export default store