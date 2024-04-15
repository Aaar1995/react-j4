import React from 'react';
import './MainContainer.css';


const MainContainer = () => {
    return (
        <div className="main-container">
            <div className="photo-container">
                <img src="black gril.jpg" alt="Photo 1" />
                <h1>Skincare Saviors</h1>
                <p className="photo-text">Upgrade your routine with prestige formulas for every skin type.</p>
            </div>

            <div className="photo-container">
                <img src="towel.jpg" alt="Photo 2" />
                <h1>Make Yourself at Home</h1>
                <p className="photo-text">Transform your space with plush bath towels and cozy robes to rival any resort.</p>
            </div>
        </div>
    );
};

export default MainContainer;
