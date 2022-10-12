import React from 'react';
import './styles/book.css';
import item from './imgs/item.jpg'; 

const Book = ({price, author}) => {
    return(
        <div className='item'>
            <img src={item} className='img'/>
            <p className='author'>Author: {author}</p>
            <p className='price'>Price:{price} Uah</p>
        </div>
    )
}


export default Book;