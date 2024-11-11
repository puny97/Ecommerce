import React, { createContext, useContext, useState } from 'react';
import { getAllProducts } from '../ApiService/api';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [filteredItems, setfilteredItems] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find((cartItem) => cartItem.id === item.id)

            if(itemExists) {
                return prevItems.map((cartItem) => 
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
                )
            } else {
                return [...prevItems, {...item, quantity : 1}]
            }
        })
    }

    const increaseQuantity = (itemId) => {
        setCartItems((prevItems) => {
          const updatedItems = prevItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          );
          return updatedItems;
        });
      };
    
      const decreaseQuantity = (itemId) => {
        setCartItems((prevItems) => {
          const updatedItems = prevItems
            .map((item) =>
              item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0);
          return updatedItems;
        });
      };

      const filterByCategory = (category) => {
        setfilteredItems(cartItems.filter((item) => item.category === category))
      }

      const sortItems = (criterion) => {
        let sortedItems = [... cartItems];
        if(criterion === 'price' ) {
          sortedItems.sort((a,b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price))
        } else if (criterion === 'name') {
          sortedItems.sort((a,b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        }
        setfilteredItems(sortedItems);
      } 

      const toggleSortOrder = () => {
        setSortOrder((prevOrder) => prevOrder === 'asc' ? 'desc' : 'asc');
      }
    
      const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{cartItems, cartCount, addToCart, increaseQuantity, decreaseQuantity, filterByCategory, sortItems, toggleSortOrder, filteredItems}}>
            {children}
        </CartContext.Provider>
    )
}