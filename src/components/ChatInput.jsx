import React, { useState } from 'react'

const ChatInput = props => {

    let [message, setMessage] = useState('')
    let [chatHistory, setChatHistory] = useState([])
    
    let chats = chatHistory.map((chat, i) => {
        return (
            <div key={i}>
                {chat}
            </div>
        )
    })

    let msges
    const addChat = (e) => {
        e.preventDefault()
        console.log(message)
        // try changing state
        msges = chatHistory
        msges.push(message)
        setChatHistory(msges)
        console.log(chatHistory)

        setMessage('')
    }

    

    return (
        <div>
            {chats}
        <form>
            <input className="text-input" type="text" placeholder="Enter new message" value={message} name="message" onChange={e => setMessage(e.target.value)} />
            <button className="chat-button" type="submit" onClick={addChat}>Send</button>
        </form>
        </div>
    )
}

export default ChatInput