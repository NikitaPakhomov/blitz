import React from 'react';

const Header = () => {
    return <div className='header'>
        <nav className="header__navigation">
            <ul className="header__ul">
                <li className="header__li"><a href='#' className="header__anchor">Home</a></li>
                <li className="header__li"><a href='#' className="header__anchor">About Me</a></li>
                <li className="header__li"><a href='#' className="header__anchor">Portfolio</a></li>
                <li className="header__li"><a href='#' className="header__anchor">Contact</a></li>
            </ul>
        </nav>
    </div>;
}


export default Header;