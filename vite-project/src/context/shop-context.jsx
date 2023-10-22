import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products.db";

export const ShopContext = createContext();

export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  function getDefaultCart() {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  }

  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function updateCartItemCount(newAmount, itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  }

  function getTotalCartAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = PRODUCTS.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
