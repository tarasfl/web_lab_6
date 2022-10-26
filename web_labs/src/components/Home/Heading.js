import React from 'react';
import './styles/heading.css';
import book from './imgs/book.jpg'; 

const Heading = () => {
    return(
        <section className='heading'>
            <div><img src={book} className='book'/></div>
            <div className='right_bar'>
                <h1>Books</h1>
                <p className='paragraph'>
                A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.
                </p>
            </div>
        </section>
    )
}

export default Heading;