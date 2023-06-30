import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import "./App.css";
import Hero from "../Hero/Hero";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Home from "../Home/Home";
import Sidebar from "../Sidebar/Sidebar";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState("all");
  const [cartItems, setcartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [Receipt, setReceipt] = useState(null);

  const handleOnSubmitCheckoutForm = async () => {
    const body = {
      user: { name: name, email: email },
      shoppingCart: [...cartItems],
    };
    try {
      const res = await axios.post(
        "https://codepath-store-api.herokuapp.com/store",
        body
      );
      setcartItems([]);
      setReceipt(res.data.purchase);
      handleOnCheckoutFormChange("name", "");
      handleOnCheckoutFormChange("email", "");
      resetProductQuantities();
    } catch (err) {}
  };

  useEffect(() => {
    console.log(Receipt);
  }, [Receipt]);

  const handleExitCheckout = () => {
    setReceipt(null);
  };

  const handleOnCheckoutFormChange = (name, value) => {
    name === "email" ? setEmail(value) : setName(value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://codepath-store-api.herokuapp.com/store"
      );
      console.log(response);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.itemId === product);
    if (ProductExist) {
      setcartItems(
        cartItems.map((item) =>
          item.itemId === product
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setcartItems((prevCart) => {
        return [...prevCart, { itemId: product, quantity: 1 }];
      });
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.itemId == product);
    if (ProductExist.quantity === 1) {
      console.log("Working!");
      const newCart = cartItems.filter((item) => item.itemId !== product);
      setcartItems(newCart);
    } else {
      setcartItems(
        cartItems.map((item) =>
          item.itemId === product
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const handleFilterChange = (newFilter) => {
    setFilterText(newFilter);
  };

  const handleOnToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    console.log(filterText);
  }, [filterText]);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            products={products}
            isOpen={isOpen}
            handleOnToggle={handleOnToggle}
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            email={email}
            name={name}
            Receipt={Receipt}
            handleExitCheckout={handleExitCheckout}
          />
          <Hero />
          <SearchAndFilter
            text={searchText}
            updateText={setSearchText}
            filterText={filterText}
            handleFilterChange={handleFilterChange}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home
                    products={products}
                    searchText={searchText}
                    filterText={filterText}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                  />
                  <About />
                </>
              }
            />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
