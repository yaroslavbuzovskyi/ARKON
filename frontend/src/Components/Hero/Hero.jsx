import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div className="hero-text">
                <p>2026 Collection</p>
                <h2>A style that <span>speaks</span> for you</h2>
                </div>
                <div className="hero-button">
                    <div>View the collection</div>
                    <img src = {arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-right-box men-clothing">
                    <span>New</span>
                    <h3>Men clothing</h3>
                </div>
                <div className="hero-right-box women-clothing">
                    <span>New</span>
                    <h3>Women clothing</h3>
                </div>
            </div>
        </div>
    )
}

export default Hero