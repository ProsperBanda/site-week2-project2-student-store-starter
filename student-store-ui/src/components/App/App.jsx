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
  
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Hero/>
          <SearchAndFilter/>
          <Home/>
          <About/>
        </main>
      </BrowserRouter>
    </div>
  )
}
