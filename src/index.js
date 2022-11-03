import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import './App.css';
import Home from './Home';

const App = () => {
    return (
        <div className='container'>
            <NavBar />
            <Home />
        </div>
        
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))