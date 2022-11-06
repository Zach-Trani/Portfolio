import React from 'react';
import './NavBar.css'

const NavBar = () => {
    console.log('hello')
    return (
        <div className='nav-container'>
            <h1 className='nav-text'>About</h1>
            <h1 className='nav-text'>Experience</h1>
            <h1 className='nav-text'>Work</h1>
            <h1 className='nav-text'>Contact</h1>
        </div>
    );
};

export default NavBar;