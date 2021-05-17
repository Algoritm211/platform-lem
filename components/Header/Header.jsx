import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand logo-text mb-0 h1" href="#">LEM</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-3 active">
              <a className="nav-link navigation-li" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link navigation-li" href="#">About</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link navigation-li" href="#">Categories</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link navigation-li" href="#">Contact Us</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link px-3 m-auto login-button navigation-li" role="button" href="#">Get Started</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
