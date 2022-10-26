import React, {useState} from 'react';
import './styles/book.css';
import item from './imgs/item.jpg'; 
import {books_list} from '../Catalog/data/books_data';

const Book = ({extendContent}) => {
    const [booksState, setBooksState] = useState(books_list)
    console.log(extendContent)
    let first_chunk;
    if (extendContent){
        first_chunk = booksState.slice(0, 6)
    }else{
        first_chunk = booksState.slice(0, 3)
    }

    const books = first_chunk.map((data) =>

    <div className='item'>
            <img src={item} className='img'/>
            <p className='author'>Author: {data.author}</p>
            <p className='price'>Price:{data.price} Uah</p>
        </div>
    )
    return(
        books
)}

export default Book;