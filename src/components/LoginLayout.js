import React from 'react';
import Login from './Login';
import './Layout.css';

const LoginLayout = () => {
    return (
        <div>
            <header>Header</header>
            <div>
                <Login />
            </div>
            <footer>Footer</footer>
        </div>
    );
};

export default LoginLayout;
