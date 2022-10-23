import React from 'react';
import './styles/header.css';
import logo from './imgs/logo.jpg'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <img src={logo} className='logo'/>
            <Router>
            <nav className="menu">
                <ul className="nav_menu">
                    <li className="nav_item">
                        <Link>Homeg</Link>    
                    </li>
                    <li className="nav_item">Catalog</li>
                    <li className="nav_item">Cart</li>
                </ul>
            </nav>
            </Router>
        </header>
    )
}

export default Header;