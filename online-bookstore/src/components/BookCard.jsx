import React from 'react';
import { useCart } from '../context/CartContext';

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="book-card">
      <img
        src={book.image}
        alt={book.title}
        loading="lazy"
        referrerPolicy="no-referrer"
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '6px',
          marginBottom: '10px'
        }}
      />
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookCard;
