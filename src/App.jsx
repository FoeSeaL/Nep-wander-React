import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/Home.css'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />

        </Routes>
        <Footer />

      </Router>
    </>
  )
}

export default App
