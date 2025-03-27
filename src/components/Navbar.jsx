import React from 'react'

const Navbar = () => {
  return (
    <>
      
<section className="hero position-relative">
  <nav className="navbar navbar-expand-lg ">
    <div className="container fs-5">
      <a className="navbar-brand" href="#">
        <img src="https://nepalwanders.com/wp-content/themes/nepalwanders/img/logo1.png" className="logo" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>HOME</NavLink>
        </li>
        <li>
          <NavLink to="/trek" className={({ isActive }) => isActive ? "active" : ""}>TREK</NavLink>
        </li>
        <li>
          <NavLink to="/tour" className={({ isActive }) => isActive ? "active" : ""}>TOUR</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>ABOUT</NavLink>
        </li>
        <li>  
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</section>


    </>
  )
}

export default Navbar
