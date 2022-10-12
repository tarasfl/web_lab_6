import React from 'react';
import './styles/header.css';
import logo from './imgs/logo.jpg'; 

const Header = () => {
    return(
        <header>
            <img src={logo} className='logo'/>
            <nav className="menu">
                <ul className="nav_menu">
                    <li className="nav_item">Home</li>
                    <li className="nav_item">Catalog</li>
                    <li className="nav_item">Cart</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;