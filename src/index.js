import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const postsData = [
  { id: 1, post: 'Hi, how are you?', likesCount: 12 },
  { id: 2, post: 'It\'s my first post', likesCount: 11 },
  { id: 2, post: 'blala', likesCount: 11 },
  { id: 2, post: 'dada', likesCount: 11 },
]

const dialogsData = [
  { id: 1, name: 'Dymich' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Viktor' },
  { id: 6, name: 'Valera' }
]

const messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your it-kamasutra' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' }
]

ReactDOM.render(
  <React.StrictMode>
    <App data={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

