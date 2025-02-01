import React, { useState } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import LeftSidebar from './shared/LeftSidebar';
import RightSidebar from './shared/RightSidebar';
import './Layout.css';

const Layout = ({ children }) => {
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

    const toggleLeftSidebar = () => {
        setLeftSidebarOpen(!leftSidebarOpen);
    };

    const toggleRightSidebar = () => {
        setRightSidebarOpen(!rightSidebarOpen);
    };

    return (
        <div className="layout-container">
            <Header toggleLeftSidebar={toggleLeftSidebar} toggleRightSidebar={toggleRightSidebar} />
            <div className="content-container">
                <div className={`sidebar-container ${leftSidebarOpen ? 'open' : 'close'}`}>
                    <LeftSidebar />
                </div>
                <div className="main-content">
                    {children}
                </div>
                <div className={`sidebar-container ${rightSidebarOpen ? 'open' : 'close'}`}>
                    <RightSidebar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
