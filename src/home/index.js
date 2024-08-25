
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import React from 'react';
import Sidebar from '../Sidebar';
import ChatList from '../ChatList';
import ChatWindow from '../ChatWindow';
import './index.css';

function Home() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.body.className = theme; // Applying theme to body directly
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`home-container ${theme}`}>
            <button onClick={toggleTheme} className="theme-toggle">
                 {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />} 
            </button>
            <Sidebar theme={theme} />
            <div className="main-content">
                <ChatList theme={theme} />
                <ChatWindow theme={theme} />
            </div>
        </div>
    );
}

export default Home;
