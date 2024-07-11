import React, { createContext, useState } from 'react';

const Context = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd, quantity) => {
        const newItem = {
            ...productToAdd,
            quantity,
        };
        if (isInCart(newItem.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === newItem.id) {
                    return {
                        ...prod,
                        quantity: prod.quantity + newItem.quantity,
                    };
                }
                return prod;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const removeItem = (id) => {
        const updateCart = cart.filter((prod) => prod.id !== id);
        setCart(updateCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    console.log(cart);
    return (
        <Context.Provider value={{ cart, setCart, addItem, removeItem, clearCart }}>
            {children}
        </Context.Provider>
    );
};

export default Context;
