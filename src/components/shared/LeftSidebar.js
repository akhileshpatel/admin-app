import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const LeftSidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/home">Home</Link>
                </li>
                <li className="menu-item">
                    <Link to="/websites">Websites</Link>
                </li>
                <li className="menu-item">Users</li>
                <li className="menu-item">Settings</li>
                <li className="menu-item">Reports</li>
            </ul>
        </aside>
    );
};

export default LeftSidebar;
