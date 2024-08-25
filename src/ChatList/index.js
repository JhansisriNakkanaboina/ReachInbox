import React from 'react';
import './index.css';

function ChatList({theme}) {
    const contacts = [
        { name: 'John Doe', lastMessage: 'Hey there!' },
        { name: 'Jane Smith', lastMessage: 'See you soon!' },
        { name: 'Sam Wilson', lastMessage: 'Let’s meet up!' },
        { name: 'Alice Johnson', lastMessage: 'Talk later!' },
    ];

    return (
        <div className={`chatlist ${theme}`}>
            {contacts.map((contact, index) => (
                <div key={index} className="chat-item">
                    <div className="chat-avatar">{contact.name.charAt(0)}</div>
                    <div className="chat-details">
                        <div className="chat-name">{contact.name}</div>
                        <div className="chat-message">{contact.lastMessage}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChatList;
