import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
    return <section className='book-list'>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
}

const Book = () => {
    return <article className='book'>
        <Image/>
        <Title/>
        <Author/>
    </article>
}


const Image = () => {
    return <img src='./images/book-1.jpg' alt='Little Blue Trucks Valentine'/>
};
const Title = () => <h2>Little Blue Truck's Valentine</h2>;
const Author = () => {
    const inlineHeadingStyles = {
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem'
    };
    return <h4 style={inlineHeadingStyles}>Alice Schertle</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);