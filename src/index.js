import React from 'react';
import store from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'




let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
        <BrowserRouter>  
          <App appState={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
}



rerenderTree(store.getState())

store.subscribe(rerenderTree)