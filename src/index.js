import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
    return <section className='book-list'>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
}

const author = 'Alice Schertle';

const Book = () => {
    const title = 'Little Blue Truck\'s Valentine';
    return <article className='book'>
        <img src='./images/book-1.jpg' alt='Little Blue Trucks Valentine'/>
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);