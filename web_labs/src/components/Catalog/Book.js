import React, {useState} from 'react';
import './styles/book.css';
import item from './imgs/item.jpg'; 
import Button from "@mui/material/Button";
import {
    Link
  } from "react-router-dom";


const Book = ({state}) => {
    const booksState = state

    
    const books = booksState.map((data) =>

    <div className='item'>
            <img src={item} className='img'/>
            <p className='author'>Author: {data.author}</p>
            <p className='price'>Price:{data.price} Uah</p>
            <p className='pages'>Pages:{data.pages}</p>
            <p className='description'>{data.description}</p>
            <Link to={'/book/'+data.author+'_'+data.pages}>
                <Button  variant="outlined" size="medium">View More</Button>
            </Link>
            
        </div>
    )
    return(
        books
)}

export default Book;
