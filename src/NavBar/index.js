import React from 'react';
import './NavBar.css'
import { useState } from 'react';

const NavBar = () => {
    const [text , setText] = useState("About")
    const [color, setColor] = useState('blue')

    // this would be helpful for changing the screen view
    const handleClick = () => {
        if (text == 'About'){
            setText('hi')
        }
        else {
            setText('About')
        }
    }

    const handleButtonBackground = () => {
        if (color == 'blue'){
            setColor('red')
        }
        else {
            setColor('blue')
        }
    }

    return (
        <div className='nav-container'>
            {/* this is equivalent to document.querySelector.. in plain js */}
            <h1 className='nav-text' onClick={handleClick}>{text}</h1> 
            <h1 className='nav-text' onClick={handleButtonBackground} style={{ backgroundColor: `${color}` }} >Experience</h1>
            <h1 className='nav-text'>Work</h1>
            <h1 className='nav-text'>Contact</h1>
        </div>
    );
};

export default NavBar;