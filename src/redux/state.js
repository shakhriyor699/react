let rerenderTree = () => {
    console.log('State is changed');
}


let state = {
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
            { id: 1, link: '/dialogs', linkName: 'Messages' },
            { id: 1, link: '/news', linkName: 'News' },
            { id: 1, link: '/music', linkName: 'Music' },
            { id: 1, link: '/settings', linkName: 'Settings' },
        ]
    }

}




export let addPost = () => {
    let newPost  = {
        id:5,
        post: state.profilePage.newTextPost,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newTextPost = ''
    rerenderTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newTextPost = newText
    rerenderTree(state)
}

export let addMessage = () => {
    let newMessage  = {
        id:6,
        message: state.messagesPage.newMessagePost,
    }
    state.messagesPage.messagesData.push(newMessage)
    state.messagesPage.newMessagePost = ''
    rerenderTree(state)
}
export let updateMessage = (newMessage) => {
    state.messagesPage.newMessagePost = newMessage
    rerenderTree(state)
}

export const subscribe = (observer) => {
    rerenderTree = observer
}

export default state