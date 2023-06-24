import * as React from "react";
import "../Home/Home.css";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
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
          <div className="buttons">
            <button className="add">
              <i className="material-icons">add</i>
            </button>
            <button className="remove">
              <i className="material-icons">remove</i>
            </button>
          </div>
          <span className="quantity"></span>
        </div>
      </div>
    </div>
  );
}
