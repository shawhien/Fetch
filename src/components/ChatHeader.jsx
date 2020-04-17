import React from 'react'
import { Container, Row, Col, Button, Image } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const ChatHeader = props => {

    return (
        <Container>
            <div className="chat-headerr">
                <a className='chat-back' href="/"><FontAwesomeIcon color="#d6d6d6" size="3x" icon={faArrowCircleLeft} /></a>
                <h2>Emmy</h2>
                <img className="img-fluid chat-picture" src="" />
            </div>
        </Container>
    )
}
export default ChatHeader

