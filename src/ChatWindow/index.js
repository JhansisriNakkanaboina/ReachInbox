import React from 'react';
import './index.css';
import { FaPaperPlane } from 'react-icons/fa';

function ChatWindow({theme}) {
    return (
        <div className={`chat-window ${theme}`}>
            <div className="chat-header">
                <h2>John Doe</h2>
            </div>
            <div className="chat-body">
                {/* Dummy chat bubbles */}
                <div className="message received">Hey, did you catch the game last night?</div>
                <div className="message sent">No, I missed it. Was it any good?</div>
                <div className="message received">It was great! We won in the last minute.</div>
                <div className="message sent">Awesome! I’ll have to check the highlights.</div>
                <div className="message received">Definitely. Let me know what you think!</div>
                <div className="message sent">Will do. Thanks!</div>
                <div className="message received">No problem. Bye!</div>
                <div className="message sent">Bye!</div>
            </div>
            <div className="chat-input-container">
                <input type="text" className="chat-input" placeholder="Type a message..." />
                <button className="send-button">
                    <FaPaperPlane />
                </button>
            </div>
        </div>
    );
}

export default ChatWindow;
