import React from 'react';
import BookList from '../components/BookList';

export default function BookShelves() {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-6">Your AI Books</h1>
      <BookList />
    </div>
  );
}