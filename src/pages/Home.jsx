import React from 'react';
import Header from '../components/Header.jsx';
import doubleArrow from '../assets/img/double_arrow.png'

const Home = () => {
    return <div className="home-wrapper">
        <Header />
        <div className="home__bottom">
            <span>SCROLL DOWN TO SEE MORE</span>
            <div className="home__img-cont">
                <img className="home__img" src={doubleArrow} alt="scroll down" />
            </div>
        </div>
    </div>;
}


export default Home;

