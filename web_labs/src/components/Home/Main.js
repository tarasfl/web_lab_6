import React, {useState} from 'react';
import './styles/main.css';
import Book from './Book';
import Button from "@mui/material/Button";

const Main = () => {
    
    const [extendContent, setExtendContent] = useState(false)
   return(
    <section className='home_shop'>
        <div className='home_items' id='items'>
            <Book extendContent={extendContent}/>
        </div>
            
        <div className='view_more'>
            <Button  variant="outlined" size="large" 
        onClick={() => {
            setExtendContent((extendContent) => !extendContent  )
  }
  }>{extendContent? 'Show Less': "View More"}</Button>
        </div>
    </section>
   )
    
}


export default Main;
