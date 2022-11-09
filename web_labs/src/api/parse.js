import axios from 'axios';

const get_met = axios.create({
    baseURL: '/data',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    }
    
});

const filters = axios.create({
    baseURL: '/filters',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    }
    
});


const search_met = axios.create({
    baseURL: '/search',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    }
    
});


export async function get_books() {
    return (await get_met.get()).data;
};

export async function apply_filters(author, price, pages){
    return (await filters.get(`/author=${author}&price=${price}&pages=${pages}`)).data;
};

export async function search_item(text){
    return (await search_met.get(`/${text}`)).data;
}