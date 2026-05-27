import React from 'react'
import './Offers.css'
import arrow_icon from '../Assets/arrow.png';

const Offers = () => {
    return (
        <div className='offers'>
            <div className="container">
                <div className="offers-left">
                    <p>Limited supply</p>
                    <h1>Spring Sale</h1>
                </div>
                <div className="offers-right">
                    <button>Get a discount -30%<img src={arrow_icon} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Offers