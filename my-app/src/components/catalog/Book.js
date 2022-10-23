import React from 'react';
import './styles/book.css';
import item from './imgs/item.jpg'; 

const Book = (props) => {

    const books = props.books;

    const listItem = books.map((book) => 
    
        <div className='item'>
            <img src={item} className='img'/>
            <p className='author'>Author: {book.author}</p>
            <p className='price'>Price:    {book.price} Uah</p>
            <p className='description'>{book.description}</p>
        </div>
    )
    return listItem;
}


export default Book;