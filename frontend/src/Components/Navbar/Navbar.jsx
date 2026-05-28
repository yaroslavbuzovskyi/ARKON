import React, { useState } from 'react'
import './Navbar.css'
import { RiShoppingCartLine } from '@remixicon/react';
import { RiUserLine } from '@remixicon/react'; 
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
    <div className='navbar'>
        <div className="container">
        <div className="nav-logo">
            <p>ARKON</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => setMenu("home")}><Link to='/'>Home</Link>{menu === "home"?<hr/>:<></>}</li>
            <li onClick={() => setMenu("mens")}><Link to='/mens'>Men</Link>{menu === "mens"?<hr/>:<></>}</li>
            <li onClick={() => setMenu("womens")}><Link to='/womens'>Women</Link>{menu === "womens"?<hr/>:<></>}</li>
            <li onClick={() => setMenu("kids")}><Link to='/kids'>Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/cart'><RiShoppingCartLine className='nav-icon' size={22}/></Link>
            <div className="nav-cart-count">0</div>
            <Link to='/login'><RiUserLine className='nav-icon' size={22} /></Link>
        </div>
        </div>
    </div>
    )
}
