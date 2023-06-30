import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

export function Home(props) {
  return (
    <div className="home">
      <div className="product-grid" id="Buy">
        <div className="content">
          <h2>Best Selling Products</h2>
          <HomePage
            searchText={props.searchText}
            filterText={props.filterText}
            handleAddProduct={props.handleAddProduct}
            handleRemoveProduct={props.handleRemoveProduct}
            products={props.products}
          />
        </div>
      </div>
    </div>
  );
}

const HomePage = (props) => {
  const [searchDisplay, setSearchDisplay] = useState([]);
  const [filterDisplay, setFilterDisplay] = useState([]);

  useEffect(() => {
    if (props.filterText === "all") {
      setFilterDisplay(props.products);
    } else {
      const newDisplay = props.products.filter((item) => {
        return item.category === props.filterText;
      });
      setFilterDisplay(newDisplay);
    }
  }, [props.filterText, props.products]);

  useEffect(() => {
    if (props.searchText === "") {
      setSearchDisplay(filterDisplay);
    } else {
      const newDisplay = filterDisplay.filter((item) => {
        return item.name.toLowerCase().includes(props.searchText);
      });
      setSearchDisplay(newDisplay);
    }
  }, [props.searchText, filterDisplay]);

  useEffect(() => {
    console.log(filterDisplay);
  }, [filterDisplay]);

  //Button action

  return (
    <div className="grid-container">
      {searchDisplay.map((product) => (
        <ProductCard
          name={product.name}
          key={product.key}
          image={product.image}
          price={product.price}
          id={product.id}
          handleAddProduct={props.handleAddProduct}
          handleRemoveProduct={props.handleRemoveProduct}
        />
      ))}
    </div>
  );
};

export default Home;
