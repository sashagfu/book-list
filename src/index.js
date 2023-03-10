import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook = {
    author: 'Alice Schertle',
    title: 'Little Blue Truck\'s Valentine',
    img: './images/book-1.jpg'
};
const secondBook = {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
};

// const author = 'Alice Schertle';
// const title = 'Little Blue Truck\'s Valentine';
// const img ='./images/book-1.jpg';

const BookList = () => {
    return <section className='book-list'>
        <Book
            author={firstBook.author}
            title={firstBook.title}
            img={firstBook.img}
        />
        <Book
            author={secondBook.author}
            title={secondBook.title}
            img={secondBook.img}
        />
    </section>
}

const Book = (props) => {
    console.log(props);
    const {img, title, author} = props;
    return <article className='book'>
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);