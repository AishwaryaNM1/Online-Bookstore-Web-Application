import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  // Temporary sample data
  useEffect(() => {
    const sampleBooks = [
      { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', price: 299 },
      { id: 2, title: 'Clean Code', author: 'Robert C. Martin', price: 499 },
      { id: 3, title: 'Atomic Habits', author: 'James Clear', price: 399 },
    ];
    setBooks(sampleBooks);
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
