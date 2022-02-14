import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/NavBar/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import './App.css';
import Settings from './Components/Settings/Settins';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/*" element={<Profile/>}/>
            <Route path='/dialogs/*' element={<Dialogs/>}/> {/* для того чтобы переходить по страницам */}
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
