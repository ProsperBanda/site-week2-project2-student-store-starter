import * as React from "react";
import "../Home/Home.css";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import CounterButton from "../Home/ButtonAction/ButtonAction";

export default function ProductCard(props) {
  // const { product } = props;
  return (
    <div className="product-card" key={props.id}>
      <Link to={`/products/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
      <div className="product-info">
        <div className="main-info">
          <h3>{props.name}</h3>
          <p>Price: ${props.price}</p>
          {props.showDescription && <p>{props.description}</p>}
        </div>
        <div className="actions">
          <CounterButton
            id={props.id}
            handleAddProduct={props.handleAddProduct}
            handleRemoveProduct={props.handleRemoveProduct}
          />
        </div>
      </div>
    </div>
  );
}
