import React from 'react';
import BookList from './components/BookList';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Online Bookstore</h1>
        <BookList />
      </div>
    </CartProvider>
  );
}

export default App;
