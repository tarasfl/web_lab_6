import React, {useState} from 'react';
import Select from 'react-select';
import './styles/dropdown.css';
import Button from "@mui/material/Button";
import Book from './Book';
import { books_list } from './data/books_data';

const filters_list = {
    filter_1: [],
    filter_2: 
        [
            { value: '0-5 Uah', label: '0-5 Uah' },
            { value: '5-10 Uah', label: '5-10 Uah' },
            { value: '10-20 Uah', label: '10-20 Uah' },
            { value: '20-more Uah', label: '20-more Uah' },
        ],
    filter_3: 
        [
            { value: '0-100 pages', label: '0-100 pages' },
            { value: '100-500 pages', label: '100-500 pages'},
            { value: '500-and more pages', label: '500-and more pages' },
        ]
};

const build_filters = () => {
    let authors = new Set()
    books_list.map((book) => authors.add(book.author))
    authors = Array.from(authors)
    let authors_list = []
    authors.map((author) => authors_list.push({value: author, label: author}))
    filters_list.filter_1 = authors_list
    return filters_list
}

const Dropdown = ({state, setState}) => {
    const [booksState, setBooksState] = useState(books_list)
    const filters_list = build_filters()

    return(
        <span>
        <div className='container'>
        <form className='filters'>
            <Select options={filters_list.filter_1} className='select_field' id={"filter_1"}/>
            <Select options={filters_list.filter_2} className='select_field' id={"filter_2"}/>
            <Select options={filters_list.filter_3} className='select_field' id={"filter_3"}/>
            <Button variant="outlined" size="medium" onClick ={() =>{
                let filter_1 = document.querySelector('#filter_1 > div > div.css-319lph-ValueContainer > div.css-qc6sy-singleValue');
                let filter_2 = document.querySelector('#filter_2 > div > div.css-319lph-ValueContainer > div.css-qc6sy-singleValue');
                let filter_3 = document.querySelector('#filter_3 > div > div.css-319lph-ValueContainer > div.css-qc6sy-singleValue');
                if(filter_1 != null){
                    setBooksState((booksState) => booksState.filter((book) => book.author == filter_1.innerHTML))
                };
                if(filter_2 != null){
                    const [min_price, max_price] = filter_2.innerHTML.split(' ')[0].split('-')
                    if(isNaN(max_price)){
                        setBooksState((booksState) => booksState.filter((book) => book.price > min_price))
                    }else{
                        setBooksState((booksState) => booksState.filter((book) => book.price > min_price && book.price < max_price))
                    }
                };
                if(filter_3 != null){
                    const [min_pages, max_pages] = filter_3.innerHTML.split(' ')[0].split('-')
                    if(isNaN(max_pages)){
                        setBooksState((booksState) => booksState.filter((book) => book.pages > min_pages))
                    }else{
                        setBooksState((booksState) => booksState.filter((book) => book.pages > min_pages && book.pages < max_pages))
                    }
                };
               
            }
            }>Apply</Button>
        </form>
        <form class="search_form" role="search" id="search_book">
            <input placeholder="search..." id="search_input"/>
            <Button variant="outlined" size="small" onClick={() =>
                {
                    const search_input = document.getElementById("search_input")
                    setBooksState((booksState) =>booksState.filter(booksState => booksState.author.search(search_input.value) !== -1) )
                }
            }>search</Button>
        </form>
        </div>
            <span className='items'>
                
            <Book state = {booksState}/>
            
            </span>
        </span>
    );
}


export default Dropdown;