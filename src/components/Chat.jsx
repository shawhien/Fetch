import React, { useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import ChatHeader from './ChatHeader'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';

const Chat = props => {

    let [message, setMessage] = useState('')
    let [chatHistory, setChatHistory] = useState([])

    let hist
    let chats = chatHistory.map((chat, i) => {
        if (i%2 === 0) {
            return (
                <div key={i} id="user-chat">
                    {chat}
                </div>
            )
        }
        else if (i%2 !== 0) {
            return (
                <div key={i} id="response-chat">
                    {chat}
                </div>
            )
        }
    })

    let replyArr = [
        "Aww thanks! I like yours a lot too!",
        "Actually, considering the quarantine, do you want to get on a Zoom call and talk for a bit?",
        "Sounds great! I'll see you soon! 🐶",
    ]

 

    const addReply = () => {
        if (chatHistory.length === 1) {
            chatHistory.push("...")
            setTimeout(() => {
                console.log(chatHistory)
                console.log('Timeout')
                chatHistory.pop()
                chatHistory.push(replyArr[0])
                console.log(chatHistory)
            }, (1000))
        }
        else if (chatHistory.length === 3) {
            chatHistory.push("...")
            setTimeout(() => {
                chatHistory.pop()
                chatHistory.push(replyArr[1])
            }, (1000))
        }
        else if (chatHistory.length === 5) {
            chatHistory.push("...")
            setTimeout(() => {
                chatHistory.pop()
                chatHistory.push(replyArr[2])
            }, (1000))
        }
    }

    let msges
    const addChat = (e) => {
        e.preventDefault()
        console.log(message)
        // change state
        msges = chatHistory
        msges.push(message)
        setChatHistory(msges)
        console.log(chatHistory)

        setMessage('')
        addReply()
    }

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }} >
                    <div className="chat-header">
                        <ChatHeader />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div className="contains-chat">
                        <div className="chat-container">
                            {chats}
                        </div>
                    <div>
                        <form>
                            <input autocomplete="off" className="text-input" type="text" placeholder="Bark here..." value={message} name="message" onChange={e => setMessage(e.target.value)} />
                            <button type="submit" onClick={addChat}><FontAwesomeIcon color="#02D1A3" size="2x" backgroundColor="white" icon={faArrowAltCircleUp} /></button>
                        </form>
                    </div>
                    </div>
                </Col>
            </Row>
            {/* keyboard input */}
        </Container>
    )
}

export default Chat
