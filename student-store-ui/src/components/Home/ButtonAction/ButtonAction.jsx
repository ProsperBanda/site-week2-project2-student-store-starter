import React, { useEffect, useState } from "react";
import "./ButtonAction.css";

function CounterButton({ id, handleAddProduct, handleRemoveProduct }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleAddCart = (id) => {
    handleAddProduct(id);
    handleClick();
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleRemoveCart = (id) => {
    handleRemoveProduct(id);
    handleDecrement();
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="buttons">
      <button className="add" onClick={() => handleAddCart(id)}>
        <i className="material-icons">add</i>
      </button>
      <button className="remove" onClick={() => handleRemoveCart(id)}>
        <i className="material-icons">remove</i>
      </button>
      <button className="amt">
        {count >= 1 ? <span>{count}</span> : null}
      </button>
    </div>
  );
}

export default CounterButton;
