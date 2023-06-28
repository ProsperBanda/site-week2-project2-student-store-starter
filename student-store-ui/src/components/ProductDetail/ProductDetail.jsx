import * as React from "react";
import "./ProductDetail.css";
import { useLocation } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://codepath-store-api.herokuapp.com/store/${id}`
      );
      console.log(response);
      setProduct(response.data.product);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <ProductCard
      name={product.name}
      key={product.key}
      image={product.image}
      price={product.price}
      id={product.id}
      showDescription={true}
      description={product.description}
    />
  );
}
