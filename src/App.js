import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Content from './content/Content'
//import NavBottom from '../components/NavBottom';


import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPaw, faComment } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Content />
        </main>
        <div className="nav-bar">
        <Container>
                <Row>
                    <Col>
                        <div className="nav-button-bar">
                            <div className="nav-button">
                                <a href="/"><FontAwesomeIcon color="#d6d6d6" size="2x" icon={faUser} /></a>
                            </div>
                            <div className="nav-button">
                                <a href="/settings"><FontAwesomeIcon color="#d6d6d6" size="2x" icon={faPaw} /></a>
                            </div>
                            <div className="nav-button">
                                <a href="/chat"><FontAwesomeIcon color="#d6d6d6" size="2x" icon={faComment} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
        </div>
      </div>
    </Router>
  )
}

export default App;