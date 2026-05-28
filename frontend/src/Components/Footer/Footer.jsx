import React from 'react'
import './Footer.css'
import { RiInstagramLine } from '@remixicon/react'; 
import { RiFacebookCircleLine } from '@remixicon/react'; 
import { RiWhatsappLine } from '@remixicon/react'; 

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <span>ARKON</span>
                        <p>We believe that clothing is a form of expression. Express yourself every day with ARKON.</p>
                    </div>
                    <div className="footer-column">
                        <p>Catalog</p>
                        <ul className='footer-links'>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <p>Service</p>
                        <ul className='footer-links'>
                            <li>Return</li>
                            <li>Dimensions</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <p>Contact Us</p>
                        <ul className='footer-links'>
                            <li>Kyiv, 22 Khreshchatyk Street</li>
                            <li>iarkon@gmail.com</li>
                            <li>+380 44 000 0000</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p>© 2025 ARKON. All rights reserved.</p>
                    <div className="footer-social">
                        <RiInstagramLine className='social-icon' size={32} />
                        <RiFacebookCircleLine className='social-icon' size={32} />
                        <RiWhatsappLine className='social-icon' size={32} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
