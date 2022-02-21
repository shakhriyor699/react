import React from 'react';
import state, { subscribe } from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateMessage, updateNewPostText} from './redux/state'
import {BrowserRouter} from 'react-router-dom'




let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
        <BrowserRouter>  
          <App appState={state} addPost={addPost} updateNewPost={updateNewPostText} addMessage={addMessage} updateMessage={updateMessage}/>
        </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
}



rerenderTree(state)

subscribe(rerenderTree)