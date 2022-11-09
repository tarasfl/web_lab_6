import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import './styles/dropdown.css';
import Button from "@mui/material/Button";
import Book from './Book';
import Spinner from './Spinner';
import { books_list} from './data/books_data';
import { get_books, apply_filters, search_item} from '../../api/parse';

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
            { value: '500-and more pages', label: '500-more pages' },
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

const Dropdown = () => {

    const [booksState, setBooksState] = useState() 
    const [authorFilter, setAuthorFilter] = useState('None')
    const [priceFilter, setPriceFilter] = useState('None')
    const [pageFilter, setPageFilter] = useState('None')
    const [loadState, setLoadState] = useState(true)
    const [searchField, setSearchField] = useState('None')


    async function load_items() {
        setBooksState(await get_books());
        setBooksState((booksState) => booksState.result)
        setLoadState((loadState) => loadState = false)
    }
    async function filter(){
        setBooksState(await apply_filters(authorFilter, priceFilter, pageFilter));
        setBooksState((booksState) => booksState.result)
        setLoadState((loadState) => loadState = false)
    }

    async function search_book(){
        setBooksState(await  search_item(searchField));
        setBooksState((booksState) => booksState.result)
        setLoadState((loadState) => loadState = false)
    }
    useEffect(() =>{ 
        setLoadState(true)
        if(authorFilter == 'None' && priceFilter == 'None' && pageFilter  == 'None' && searchField == 'None'){
            load_items()
        }else{
            filter()
        }
    
    }
    , [authorFilter, pageFilter, priceFilter])

    useEffect(() =>{
        if(searchField != 'None'){
            search_book()
        }
    }, [searchField])
    
    const filters_list = build_filters()
    if(loadState){return <Spinner/>}
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
                    let author = filter_1.innerHTML
                    setAuthorFilter((authorFilter) => authorFilter = author)
                };
                if(filter_2 != null){   
                    let price = filter_2.innerHTML
                    setPriceFilter((priceFilter) => priceFilter = price)
                };
                if(filter_3 != null){
                    let pages = filter_3.innerHTML
                    setPageFilter((pageFilter) => pageFilter=pages)
                };
            }
            }>Apply</Button>
        </form>
        <form class="search_form" role="search" id="search_book">
            <input placeholder="search..." id="search_input"/>
            <Button variant="outlined" size="small" onClick={() =>
                {
                    const search_input = document.getElementById("search_input")
                    const search_value = search_input.value
                    setSearchField((searchField) => searchField = search_value)
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