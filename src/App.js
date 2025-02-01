import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginLayout from './components/LoginLayout';
import Layout from './components/Layout';
import Home from './components/Home';
import Websites from './components/pages/website/Websites';
import Website from './components/Website';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import LeftSidebar from './components/shared/LeftSidebar';
import RightSidebar from './components/shared/RightSidebar';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginLayout />} />
                <Route path="/" element={<LoginLayout />} />
                <Route path="/home" element={<Layout><Home /></Layout>} />
                <Route path="/websites" element={<Layout><Websites /></Layout>} />
                <Route path="/websites/:id" element={<Layout><Website /></Layout>} />
            </Routes>
        </Router>
    );
}

export default App;
