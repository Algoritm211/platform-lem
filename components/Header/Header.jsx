import React, { useState } from 'react'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'
import { Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import UserImage from './UserImage'
import withPageSize from '../HOC/withPageSize'
import { getIsAuth } from '../../store/auth/selectors'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'


const Header = ({ size }) => {
  const [loginModalShow, setLoginModalShow] = useState(false)
  const [registrationModalShow, setRegistrationModalShow] = useState(false)
  const isAuth = useSelector(getIsAuth)
  const router = useRouter()
  // console.log(router)

  const switchModals = () => {
    setLoginModalShow((prev) => !prev)
    setRegistrationModalShow((prev) => !prev)
  }

  const menuFieldCreator = (textLink, routePath) => {
    const regex = new RegExp('^' + routePath + '$', 'g')
    return (
      <Link href={routePath}>
        <Nav.Link
          style={{ color: router.route.match(regex) && 'black' }}
          href={routePath}
          className={'navigation-li px-3'}>{textLink}</Nav.Link>
      </Link>
    )
  }
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="navbar-light">
        <div className="container">
          <Link href={'/'}>
            <Navbar.Brand href="/">LEM</Navbar.Brand>
          </Link>
          {size[0] < 768 && (
            <div className="d-flex justify-content-between">
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              {isAuth
                ? (<UserImage/>)
                : (
                  <div className={'navigation-li px-2'}>
                    <button className="nav-link px-2 m-auto login-button navigation-li" role="button" onClick={() => setLoginModalShow(true)}>Get Started</button>
                  </div>
                )}
            </div>
          )}
          <Navbar.Collapse id="responsive-navbar-nav" className={'ml-auto'}>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              {menuFieldCreator('Main', '/')}
              {menuFieldCreator('Courses', '/programs')}
              {menuFieldCreator('Plans', '/plans')}
              {menuFieldCreator('Contacts', '/contacts')}
            </Nav>
            {size[0] >= 768 && (
              <React.Fragment>
                {isAuth
                  ? (<UserImage/>)
                  : (
                    <div className={'navigation-li px-2'}>
                      <button className="nav-link px-2 m-auto login-button navigation-li" role="button" onClick={() => setLoginModalShow(true)}>Get Started</button>
                    </div>
                  )}
              </React.Fragment>
            )}
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

export default withPageSize(Header)
