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
          <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} />
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
                  <Home searchText={searchText} filterText={filterText} />
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
