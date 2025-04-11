import React from 'react';
import { useCart } from '../context/CartContext';

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div className="book-card bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-gray-600">by {book.author}</p>
      <p className="mt-2 font-semibold">₹{book.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;