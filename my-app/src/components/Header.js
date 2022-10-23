import React from 'react';
import './styles/header.css';
import logo from './imgs/logo.jpg'; 
import App from './App';
import {
    BrowserRouter as Router,
    Routes,
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
                        <Link to="/">Homeg</Link>    
                    </li>
                    <li className="nav_item">
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/'><App /></Route>
                <Route path='/catalog'><App /></Route>
                <Route path='/cart'><App /></Route>
            </Routes>
            </Router>
        </header>
    )
}

export default Header;