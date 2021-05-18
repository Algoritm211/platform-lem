import React from 'react'
import MyVerticallyCenteredModal from '../Form/Login'
import MyCenteredModal from '../Form/Registration'

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand logo-text mb-0 h1" href="/">LEM</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-2 active">
              <a className="nav-link navigation-li" href="#">Main
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link navigation-li" href="#">Courses</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link navigation-li" href="#">Price</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link navigation-li" href="#">Contacts</a>
            </li>
            <li className="nav-item px-2">
              <button className="nav-link px-2 m-auto login-button navigation-li" role="button" onClick={() => setModalShow(true)}>Get Started</button>
            </li>
            {/* <MyVerticallyCenteredModal*/}
            <MyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
