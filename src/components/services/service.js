import React from 'react';
import image from '../../assets/church.avif';
import './service.css';

function Service() {
    return (
        <>
            <h1 className='serviceHeader'>Services</h1>
            <div className='serviceContainer'>
                <img className='serviceImage' src={image} alt="praying"/>
                <div className="textServiceContainer">
                    <p>Rapha Christian Counseling Center believes that nothing is impossible with God and that He alone is the author of life and change that everyone needs. Without Him, we are powerless to achieve and overcome life's challenges successfully.</p>
                    <div className="listContainer">
                        <ul>
                            <li>Depression</li>
                            <li>Domestic Violence</li>
                            <li>Marriage Counseling</li>
                            <li>Child Therapy</li>
                        </ul>
                        <ul>
                            <li>Addiction</li>
                            <li>Abuse</li>
                            <li>Eating Disorders</li>
                            <li>Grief</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
