import React from 'react';
import item from './imgs/item.jpg'; 
import './styles/item.css';
import Button from "@mui/material/Button";
import {useParams } from "react-router-dom";
import {books_list} from '../Catalog/data/books_data';


function Item() {

    const  {id} = useParams();
    const[author, pages] = id.split('_')
    const books = books_list.filter((book) => book.author == author && book.pages == pages)
    const book = books[0]
    return (
    <section>
        <div className='book_content'>
            <img src={item} className='item-img'/>
            <span className='item-right_bar'>
                <span className='item-chars'>
                    <p className='item-price'>Price: {book.price} Uah</p>
                    <p className='item-pages'>Pages: {pages}</p>
                </span>
                <h2 className='author'>Author: {author}</h2>
                
                <h4 className='description'>{book.description}</h4>
            </span>
        </div>
        <div className='item-lower'>
            <p className='item-price'>Price: {book.price} Uah</p>
            <span className='item-buttons'>
                    <Button className='go_back'  variant="contained" size="small">Go Back</Button>
                    <Button  variant="outlined" size="small">Add to Cart</Button>
            </span>
        </div>
    </section>
  );
}

export default Item;