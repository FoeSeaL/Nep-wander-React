import React from 'react'

const Navbar = () => {
  return (
    <>
      
<section className="hero position-relative">
  <nav className="navbar navbar-expand-lg">
    <div className="container fs-5">
      <a className="navbar-brand" href="#">
        <img src="https://nepalwanders.com/wp-content/themes/nepalwanders/img/logo1.png" className="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Trek
            </a>
          </li><li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tour
            </a>
          </li><li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
          </li><li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Travel Guide</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Contact us</a>
          </li>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </ul>
      </div>
    </div>
  </nav>
</section>

    </>
  )
}

export default Navbar
