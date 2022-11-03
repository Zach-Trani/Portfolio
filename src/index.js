import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import './App.css';
import Home from './Home';

const App = () => {
    return (
        <div className='border'>
            <div className='container'>
                <NavBar />
                <Home />
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))