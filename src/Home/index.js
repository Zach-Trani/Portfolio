import React from 'react';
import headshot from './headshot.png';
import './Home.css';

const Home = () => {
    return (
            <div className='home-container'>
                <div className='home-left'>
                    <p className='home-text home-intro'>Hey, I'm Zach Trani</p>
                    <h1 className='home-text home-header'>I enjoy designing modern websites for local companies</h1>
                    <button className='home-text home-button'>Get in touch</button>
                </div>
                <div className='home-right'>
                    <div className='home-circle'>
                        <img alt='headshot' src={headshot} className='headshot' />
                    </div>

                </div>
            </div>
    );
};

export default Home;
