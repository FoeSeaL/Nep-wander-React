import React from 'react'
import Navbar from './components/Navbar'

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
