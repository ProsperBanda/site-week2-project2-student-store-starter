import React, { useEffect, useState } from "react";
import "./ButtonAction.css";

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="buttons">
      <button className="add" onClick={handleClick}>
        <i className="material-icons">add</i>
      </button>
      <button className="remove" onClick={handleDecrement}>
        <i className="material-icons">remove</i>
      </button>
      <button className="amt">
        {count >= 1 ? <span>{count}</span> : null}
      </button>
    </div>
  );
}

export default CounterButton;
