import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Content from './content/Content'

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Content />
        </main>
        <div className="nav-bar">
          
        </div>
      </div>
    </Router>
  )
}

export default App;