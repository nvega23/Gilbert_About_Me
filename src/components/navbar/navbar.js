import React, { useState, useEffect } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="navbarContainer">
                <Link className='links' to={'/'}> <p className='navbarComponents'>Home</p> </Link>
                <Link className='links' to={'/about'}> <p className='navbarComponents'>About</p> </Link>
                <Link className='links' to={'/service'}> <p className='navbarComponents'>Services</p> </Link>
                <Link className='links' to={'/contact'}> <p className='navbarComponents'>Contact</p> </Link>
                <div className="sideBox">
                    <p className='phoneNumber'>(661) 555 - 5555</p>
                    <div className="buttonContainer">
                        <Link to={'/contact'}> <button className='makeAppointment'>Make an appointment</button> </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;