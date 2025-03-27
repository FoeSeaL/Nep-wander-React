import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Trek from './pages/Trek'
import Tour from './pages/Tour'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
     <>
        
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/trek' element={<Trek />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </>
   </Router>
  )
}

export default App
