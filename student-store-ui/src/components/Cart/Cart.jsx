import * as React from "react";
import "./Cart.css";

export default function Cart(props) {
  let subTotal = 0;
  const { cartItems, products } = props;
  console.log(cartItems);
  const displayCartItems = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.itemId);
    const totalPrice = item.quantity * product.price;
    subTotal += totalPrice;

    return (
      <div className="display-cart-items" key={product.id}>
        <span className="flex-2 cart-product-name">{product.name}</span>
        <span className="center cart-product-quantity">{item.quantity}</span>
        <span className="center cart-product-price">{`$${product.price.toFixed(
          2
        )}`}</span>
        <span className="center cart-product-total">{`$${totalPrice.toFixed(
          2
        )}`}</span>
      </div>
    );
  });

  console.log(subTotal);

  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items added</div>
      )}

      <div className="header-row">
        <span className="flex-2">Name</span>
        <span className="center">Quantity</span>
        <span className="center">Unit Price</span>
        <span className="center">Cost</span>
      </div>

      <div>{displayCartItems}</div>
      <div className="receipt-subtotal">
        <span className="label">Subtotal</span>
        <span></span>
        <span></span>
        <span className="center subtotal">{subTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
