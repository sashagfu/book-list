import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [{
    id: 1,
    author: 'Alice Schertle',
    title: 'Little Blue Truck\'s Valentine',
    img: './images/book-1.jpg'
}, {
    id: 2,
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
}];

const BookList = () => {
    return <section className='book-list'>
        <EventExamples/>
        {books.map((book) => {
            return <Book {...book} key={book.id}/>;
        })}
    </section>
}

const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log('handleFormInput')
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
    };
    const handleButtonClick = () => {
        console.log('handleButtonClick')
    };
    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log('form submitted');
    };
    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Typical Form</h2>
                <input
                    type='text'
                    name='example'
                    onChange={handleFormInput}
                    style={{margin: '1rem 0'}}
                />
                <button type='submit'>submit</button>
                <div>
                    <button type='button' onClick={handleButtonClick}>click me</button>
                </div>
            </form>
        </section>
    );
}

const Book = (props) => {
    const {img, title, author} = props;
    return <article className='book'>
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
