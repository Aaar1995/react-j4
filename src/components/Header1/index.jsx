import React from 'react';
import './Header.css';

const Header1 = () => {
    return (
        <div className="container">
            <div className="title">Italic</div>
            <div className="links">
                <a href="#">Featured</a>
                <a href="#">Women</a>
                <a href="#">Men</a>
                <a href="#">Home</a>
                <a href="#">Jewelry</a>
                <a href="#">Beauty</a>
                <a href="#">Travel</a>
                <a href="#">Pets</a>
            </div>
            <div className="right">
                <a href="#">Sign In</a>
                <img src="./Image/Vector.jpg" alt="Search" />
                <img src="./Image/Frame.jpg" alt="Cart" />
            </div>
        </div>
    );
};

export default Header1;
