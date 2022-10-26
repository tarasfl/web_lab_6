import React from 'react';
import './styles/footer.css';
import logo from './imgs/logo.jpg'; 
import facebook from './imgs/facebook.png'; 
import instagram from './imgs/instagram.png'; 


const Footer = () => {
   return(
        <footer>
            <p>Books Inc.</p>
            <img src={logo} className='logo'/>
            <div className='icons'>
                <img src={facebook} className='icon'/>
                <img src={instagram} className='icon'/>
            </div>
        </footer>
   )
    
}

export default Footer