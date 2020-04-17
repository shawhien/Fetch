import React from 'react'
import { Container, Row, Col, Button, Image } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import beachEmmy from '../assets/beachEmmy.png';

const ChatHeader = props => {

    return (
        <Container>
            <div className="chat-headerr">
                <a className='chat-back' href="/"><FontAwesomeIcon color="#02D1A3" size="2x" icon={faArrowCircleLeft} /></a>
                <h2>🦴Emmy | 👩‍💻Mads</h2>
                <img className="img-fluid chat-picture" src= 'https://i.imgur.com/dQosXvo.jpg' />
            </div>
        </Container>
    )
}
export default ChatHeader

