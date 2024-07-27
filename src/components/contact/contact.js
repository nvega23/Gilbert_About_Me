import React, { Component } from 'react'
import './contact.css'
import ContactForm from './contactForm';

function Contact(){
    return (
        <div className='contactContainer'>
            <div className="contactText">
                Contact Gilbert Sosa
            </div>
            <ContactForm/>
        </div>
    )
}

export default Contact;