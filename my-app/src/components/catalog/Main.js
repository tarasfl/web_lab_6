import React from 'react';
import './styles/main.css';
import Book from './Book';

const Main = () => {
   return(
    <section className='shop'>
        <div className='items'>
            <Book price={13} author={'Greg'}></Book>
            <Book price={3} author={'Mark'}></Book>
            <Book price={32} author={'Igor'}></Book>
        </div>
        <div className='view_more'>
        <button>View More</button>
        </div>
    </section>
   )
    
}


export default Main;
