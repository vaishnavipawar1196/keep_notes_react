import React from 'react';

const Header = () => {
    return(
        <header className="App-header">
            <img src={`${process.env.PUBLIC_URL}/keep_logo.png`} className="App-logo" alt="logo" />
            <h3>Keep Notes App</h3>       
        </header>
    )
}

export default Header;