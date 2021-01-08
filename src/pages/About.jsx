import Header from '../components/Header.jsx';
import React from 'react';
import manImg from '../assets/img/Man.png';


const About = () => {
    return <div className="about-wrapper">
        <Header />
        <div className="about__main">
            <div className="about__info">
                <div className="about__img-cont">
                    <img src={manImg} alt="man" className="about__img" />
                </div>
                <div className="about__text-content">
                    <h2>ABOUT ME</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></span>
                    <span className="about__name">Jason Wood</span>
                </div>
            </div>
        </div>
        <div className="about__bottom">
            <span>KEEP SCROLLING, THERE IS STILL MORE TO COME.</span>
            <div id="square"></div>
        </div>
    </div>;
}


// #endregion

export default About;