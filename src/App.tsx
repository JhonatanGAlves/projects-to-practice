import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LateralMenu from './components/LateralMenu';
import ContentProject from './components/projects/ContentProject';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className='container-main'>
        <Routes>
          <Route path='/' element={
            <>
              <div className='lateral-menu'>
                <LateralMenu />
              </div>
              <div className='content'>
                <ContentProject />
              </div>
            </>
          } />
        </Routes>
      </main>
    </div>

  )
}

export default App;
