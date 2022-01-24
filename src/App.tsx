import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LateralMenu from './components/LateralMenu';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className='container-main'>
        <div className='lateral-menu'>
          <LateralMenu />
        </div>
        <div className='content'>
          ...
        </div>
      </main>
    </div>
  );
}

export default App;
