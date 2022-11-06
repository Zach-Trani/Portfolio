import React from 'react';
import headshot from './headshot.png';
import './Home.css';

const Home = () => {
    return (
            <div className='home-container'>
                <div className='home-left'>
                    <p className='home-text home-intro'>Hey, I'm Zach Trani</p>
                    <h1 className='home-text home-header'>I enjoy designing modern websites. For local business- by local business.</h1>
                    <div className='home-text home-button'>Get in touch</div>
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
