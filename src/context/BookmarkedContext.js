import React, { createContext, useState, useEffect } from 'react';

export const BookmarkedContext = createContext();

export const BookmarkedProvider = ({ children }) => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    const items = getBookmarkedItems();
    setBookmarkedItems(items);
  }, []);

  const addBookmark = (item) => {
    addBookmarkedItem(item);
    setBookmarkedItems([...bookmarkedItems, item]);
  };

  const removeBookmark = (id) => {
    removeBookmarkedItem(id);
    setBookmarkedItems(bookmarkedItems.filter((item) => item.id !== id));
  };

  const addBookmarkedItem = (item) => {
    const items = getBookmarkedItems();
    items.push(item);
    localStorage.setItem('bookmarkedItems', JSON.stringify(items));
  };

  const removeBookmarkedItem = (id) => {
    const items = getBookmarkedItems();
    const filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem('bookmarkedItems', JSON.stringify(filteredItems));
  };

  const getBookmarkedItems = () => {
    const items = localStorage.getItem('bookmarkedItems');
    return items ? JSON.parse(items) : [];
  };

  return (
    <BookmarkedContext.Provider
      value={{ bookmarkedItems, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkedContext.Provider>
  );
};
