import React, { Component } from 'react';
import image from '../../assets/gil.png';
import './about.css';

function About(){
    return (
        <>
            <div className='aboutContainer'>
                <div className="aboutMeImageContainer">
                    <img src={image} alt="About me image" className='aboutMeImage'/>
                </div>
                <div className="aboutText">
                    <p className='aboutMeText'>
                    I believe the Bible is the Word of God. I believe in one God who eternally exists. I believe that
God the Father is the Creator of everything. He is Holy, all-knowing, all-powerful, and
omnipresent. God is eternal, just, and loving. I believe that He sent His only Begotten Son,
Jesus Christ, who became man but also remained Divine. He was conceived of the Holy Spirit
and born of the virgin Mary so that He may reveal God and redeem sinful man. I believe that
Christ accomplished His purpose in redeeming us from our sinful state (separation from God)
through His death on the cross. I believe that I will spend eternity with Christ because I put my
trust in Him. I also strive to obey Him.
I believe that while Christ is in Heaven with the Father, the Holy Spirit is at work in the world to
restrain evil, and convict people of sin. The Holy Spirit is at work in all believers carrying out
God’s purposes. I believe that there is a Devil, the fallen angel Lucifer (Satan), an enemy of God
and all Christians, and originator of sin. I believe that Christ will return as promised to bring His
people to Him and create a new Heaven and Earth. Ultimately Satan and Sin will be totally
removed from God’s people, and we will live with Him eternally in Heaven. Our work as
Christians here on earth is to go and spread God’s Word, lead people to Christ, grow as a body
of believers in Christ, and glorify Him in everything we do.
I believe that each one of us is unique and we were meant to have a personal ongoing
relationship with Christ and all His people.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;
