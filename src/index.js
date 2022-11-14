import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import ProjectCard from './ProjectCard';

const App = () => {
    return (
        <div className='border'>
            <div className='container'>
                <NavBar />
                <Home />
                <ProjectCard />
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))