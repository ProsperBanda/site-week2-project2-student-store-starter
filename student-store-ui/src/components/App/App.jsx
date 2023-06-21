import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Hero from "../Hero/Hero"
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Hero/>
          <SearchAndFilter/>
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
