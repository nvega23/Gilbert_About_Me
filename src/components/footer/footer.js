import React, { useState, useEffect } from 'react';
import './footer.css'

function Footer() {
    return ( 
        <>
            <div className="footerContainer">
                <p className='footerInfo'>
                    Rapha Christian Counseling Center
                    1300 E. Shaw Ave. Suite 149
                    Fresno, CA 93710
                    (559)478-6077
                    (559)824-6619
                </p>
                <p className='footerText'>
                    © 2019 Rapha Christian Counseling All Rights Reserved
                </p>
            </div>
        </>
     );
}

export default Footer;