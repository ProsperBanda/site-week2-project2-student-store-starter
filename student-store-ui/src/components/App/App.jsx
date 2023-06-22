import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import Hero from "../Hero/Hero"
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter"
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'

export default function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Hero/>
          <SearchAndFilter/>
          <HomePage/>
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}

const HomePage = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://codepath-store-api.herokuapp.com/store'); 
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="grid-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};





