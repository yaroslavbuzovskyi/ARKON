import React, { useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
    <div className='navbar'>
        <div className="nav-logo">
            <p>ARKON</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => setMenu("home")}>Home{menu === "home"?<hr/>:<></>}</li>
            <li onClick={() => setMenu("mens")}>Men{menu === "mens"?<hr/>:<></>}</li>
            <li onClick={() => setMenu("womens")}>Women{menu === "womens"?<hr/>:<></>}</li>
            <li onClick={() => setMenu("kids")}>Kids{menu === "kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
            <button>Login</button>
        </div>
    </div>
    )
}
