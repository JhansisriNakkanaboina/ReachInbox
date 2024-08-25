import React from 'react';
import './index.css';
import { FaHome, FaUserFriends, FaChartLine, FaCog } from 'react-icons/fa';

function Sidebar({ theme }) {
    return (
        <div className={`sidebar ${theme}`}>
            <div className="sidebar-icons">
                <FaHome className="icon" />
                <FaUserFriends className="icon" />
                <FaChartLine className="icon" />
                <FaCog className="icon" />
            </div>
        </div>
    );
}

export default Sidebar;
