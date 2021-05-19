import React, { useState } from 'react'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'
import { Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'


const Header = () => {
  const [loginModalShow, setLoginModalShow] = useState(false)
  const [registrationModalShow, setRegistrationModalShow] = useState(false)

  const switchModals = () => {
    setLoginModalShow((prev) => !prev)
    setRegistrationModalShow((prev) => !prev)
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="navbar-light">
        <div className="container">
          <Link href={'/'}>
            <Navbar.Brand href="/">LEM</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className={'ml-auto'}>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Link href={'/'}>
                <Nav.Link href="/" className={'navigation-li px-3'}>Main</Nav.Link>
              </Link>
              <Link href={'/programs'}>
                <Nav.Link href={'/programs'} className={'navigation-li px-3'}>
                  Courses
                </Nav.Link>
              </Link>
              <Link href={'/plans'}>
                <Nav.Link href={'/programs'} className={'navigation-li px-3'}>
                  Plans
                </Nav.Link>
              </Link>
              <Link href={'/contacts'}>
                <Nav.Link href={'/contacts'} className={'navigation-li px-3'}>
                  Contacts
                </Nav.Link>
              </Link>
              <Nav.Item href="#m" className={'navigation-li px-2'}>
                <button className="nav-link px-2 m-auto login-button navigation-li" role="button" onClick={() => setLoginModalShow(true)}>Get Started</button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <RegistrationModal
        show={registrationModalShow}
        switchModals={() => switchModals()}
        onHide={() => setRegistrationModalShow(false)}
      />
      <LoginModal
        show={loginModalShow}
        switchModals={() => switchModals()}
        onHide={() => setLoginModalShow(false)}
      />
    </>
  )
}

export default Header
