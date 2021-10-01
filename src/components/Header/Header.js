import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Worlds Top Presidents</h1>
            <h3> <b>Nicolas Sardonyx</b> was found guilty of illegally  financing his 2012 presidential bid by exceeding <br /> France’s
                strict electoral rules and sentenced to a year of house arrest. </h3>

            <h1>Total Budget: <span className="budget">2950 Million</span></h1>
        </div>
    );
};

export default Header;