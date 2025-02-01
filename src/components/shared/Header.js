import React from 'react';
import './Header.css';

const Header = ({ toggleLeftSidebar, toggleRightSidebar }) => {
    return (
        <header className="d-flex justify-content-between align-items-center p-3 bg-light">
            <button className="hamburger-icon" onClick={toggleLeftSidebar}>
                &#9776;
            </button>
            <div className="header-title">My CMS App</div>
            <div className="search-box">
                <input type="text" className="form-control" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
            <button className="hamburger-icon" onClick={toggleRightSidebar}>
                &#9776;
            </button>
            <img src="https://placehold.co/40" alt="Profile" className="profile-pic" />
        </header>
    );
};

export default Header;
