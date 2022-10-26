import React from 'react';
import './styles/header.css';
import logo from './imgs/logo.jpg'; 
import Home from './Home/Home'
import Catalog from './Catalog/Catalog';
import Item from './Item/Item';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <Router>
          <header>
            <img src={logo} className='logo' alt='logo'/>
            
            <nav className="menu">
                <ul className="nav_menu">
                    <li className="nav_item">
                        <Link to="/">Home</Link>    
                    </li>
                    <li className="nav_item">
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav> 
            </header>
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route exact path='/catalog' element={<Catalog />}/>
                <Route exact path='/cart' />
                <Route exact path="book/:id" element={<Item />}/>
            </Routes>
            </Router>
        </div>
    )
}

export default Header;