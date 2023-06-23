import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import About from "../About/About"
import "./App.css"
import Hero from "../Hero/Hero"
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter"
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'
import Home from "../Home/Home"

export default function App() {
  
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilterText(newFilter);
  }

  useEffect(() => {
    console.log(filterText)
  }, [filterText])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Hero/>
          <SearchAndFilter text={searchText} updateText={setSearchText} filterText={filterText} handleFilterChange={handleFilterChange}/>
          <Home searchText={searchText} filterText={filterText}/>
          <About/>
        </main>
      </BrowserRouter>
    </div>
  )
}
