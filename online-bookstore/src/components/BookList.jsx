import React from 'react';
import books from '../data/books';
import BookCard from './BookCard';

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
