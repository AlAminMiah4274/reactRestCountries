import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>Welcome to My Rest Countries</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;