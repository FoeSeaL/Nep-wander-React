import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/Home.css'

function App() {
  return (
    <>
      <Router>
        
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />

        </Routes>

      </Router>
    </>
  )
}

export default App
