import React, { useContext } from "react";
import "./cart.css";
import { PRODUCTS } from "../../products.db";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";

import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartItemsList = PRODUCTS.map((product) => {
    if (cartItems[product.id] !== 0) {
      return <CartItem key={product.id} data={product} />;
    }
  });

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">{cartItemsList}</div>
      {getTotalCartAmount() > 0 && (
        <div className="checkout">
          <p>Subtotal: ${getTotalCartAmount()}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}
