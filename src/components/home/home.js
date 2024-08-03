import React, { Component } from 'react'
import image from '../../assets/beach.png'
import './home.css'
import About from '../about/about';
import Contact from '../contact/contact'

function Home(){
    return (
        <>
            <div className='homeContainer'>
                <img className='homeImage' src={image} alt="home image" />
            </div>
            <About/>
            <Contact/>
        </>
    )
}

export default Home;