import * as React from "react";

export default function Cart(props) {
  let subTotal = 0;
  const { cartItems, products } = props;
  console.log(cartItems);
  const displayCartItems = cartItems.map((item) => {
    // const product = props.products[item.itemId - 1];
    const product = products.find((p) => p.id === item.itemId);
    const totalPrice = item.quantity * product.price;
    subTotal += totalPrice;

    return (
      <div className="display-cart-items" key={product.id}>
        <p>{product.name}</p>
        <p>{item.quantity}</p>
        <p>{`$${product.price.toFixed(2)}`}</p>
        <p>{`$${totalPrice.toFixed(2)}`}</p>
      </div>
    );
  });

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
    </div>
  );
}
