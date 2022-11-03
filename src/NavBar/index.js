import React from 'react';
import './NavBar.css'

const NavBar = () => {
    console.log('hello')
    return (
        <div className='nav-container'>
            <h1 className='nav-text'>Home</h1>
            <h1 className='nav-text'>About</h1>
            <h1 className='nav-text'>Portfolio</h1>
            <h1 className='nav-text'>Pages</h1>
            <h1 className='nav-text'>Contact</h1>
        </div>
    );
};

export default NavBar;