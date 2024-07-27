import React, { Component } from 'react';
import image from '../../assets/portrait.avif';
import './about.css';

function About(){
    return (
        <>
            <div className='aboutContainer'>
                <div className="aboutMeImageContainer">
                    <img src={image} alt="About me image" className='aboutMeImage'/>
                </div>
                <div className="aboutText">
                    <p>Meet: Gilbert Sosa</p>
                    <p>Hi My name is Gilbert Sosa</p>
                </div>
            </div>
        </>
    )
}

export default About;