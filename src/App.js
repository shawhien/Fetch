import React from 'react';
import './App.css';

import Content from './components/Content'
import NavBottom from './components/NavBottom';

function App() {
  return (
    <div className="App">
      <main>
        <Content />
      </main>
      <div className="nav-bar">
        <NavBottom />
      </div>
    </div>
  );
}

export default App;