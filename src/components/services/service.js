import React from 'react';
import image from '../../assets/gil.png';
import './service.css';

function Service() {
    return (
        <>
            <h1 className='serviceHeader'>Services</h1>
            <div className='serviceContainer'>
                <img src={image} alt="About me image" className='aboutMeImageService'/>
                <div className="textServiceContainer">
                    <div className="listContainer">
                    <h3>Meet Gilbert Sosa, MBA, LCPC!</h3>
                    <div className="textContainer">

                        <ul>
                            <li>
                                Licensed Clinical Pastoral Counselor
                            </li>
                            <li>
                                Certified Temperament Pastoral Counselor
                            </li>
                            <li>
                                Certified Temperament Counselor
                            </li>
                            <li>
                                Licensed by the
                                National Christian Counseling Association
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Specializing in:
                                Pre-Marital Counseling
                            </li>
                            <li>
                                Marriage Counseling
                            </li>
                            <li>
                                Couples Therapy
                            </li>
                        </ul>
                    </div>
                    <p>N.C.C.A. Lic# 24783</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
