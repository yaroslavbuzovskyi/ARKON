import React from 'react'
import './Offers.css'
import arrow_icon from '../Assets/arrow.png';
import { RiArrowRightLongLine } from '@remixicon/react';

const Offers = () => {
    return (
        <div className='offers'>
            <div className="container">
                <div className="offers-left">
                    <p>Limited supply</p>
                    <h1>Spring Sale</h1>
                </div>
                <div className="offers-right">
                    <button>Get a discount -30%<RiArrowRightLongLine className="arrow-icon" /></button>
                </div>
            </div>
        </div>
    )
}

export default Offers