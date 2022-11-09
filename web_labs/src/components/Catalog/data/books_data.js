import React, {useState} from "react"



export const books_list = [
    {
        author: 'Mark',
        price: 14.3,
        pages: 100,
        description: "book description"
    },
    {   
        author: 'igor',
        price: 2.1,
        pages: 120,
        description: "book description"
    },

    {
        author: 'Anton',
        price: 6.3, 
        pages: 400,
        description: "book description"
    },
    {
        author: 'Anton',
        price: 6.3, 
        pages: 700,
        description: "book description"
    },
    {
        author: 'Andryi',
        price:993, 
        pages: 40,
        description: "book description"
    },
    {
        author: 'Dem',
        price: 89,
        pages: 50, 
        description: "book description"
    },

]



const BooksContex = React.createContext([{books: books_list}])
  
export {BooksContex}
