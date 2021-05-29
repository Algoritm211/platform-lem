import React, { useState } from 'react'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'
import { Nav, Navbar, Form } from 'react-bootstrap'
import Link from 'next/link'
import UserImage from './UserImage'
import withPageSize from '../HOC/withPageSize'
import { getIsAuth } from '../../store/auth/selectors'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'


const Header = ({ size }) => {
  const { t } = useTranslation('header')
  const router = useRouter()
  const [currentLocation, setCurrentLocation] = useState(router.locale)

  const [loginModalShow, setLoginModalShow] = useState(false)
  const [registrationModalShow, setRegistrationModalShow] = useState(false)
  const isAuth = useSelector(getIsAuth)

  const switchModals = () => {
    setLoginModalShow((prev) => !prev)
    setRegistrationModalShow((prev) => !prev)
  }

  const onLanguageChange = (event) => {
    setCurrentLocation(event.target.value)
    router.push(
      router.asPath,
      router.asPath,
      { locale: event.target.value })
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
                    <button className="nav-link px-2 m-auto login-button navigation-li" role="button" onClick={() => setLoginModalShow(true)}>{t('start')}</button>
                  </div>
                )}
            </div>
          )}
          <Navbar.Collapse id="responsive-navbar-nav" className={'ml-auto'}>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              {menuFieldCreator(t('main'), '/')}
              {menuFieldCreator(t('courses'), '/programs')}
              {menuFieldCreator(t('plans'), '/plans')}
              {menuFieldCreator(t('contacts'), '/contacts')}
              <Form className="navigation-li px-3 d-flex" style={{ alignItems: 'center' }}>
                <Form.Group className="m-0" controlId="exampleForm.SelectCustomSizeSm">
                  <Form.Control
                    as="select"
                    size="sm"
                    custom
                    value={currentLocation}
                    onChange={onLanguageChange}>
                    <option value={'ru'}>Русский</option>
                    <option value={'en'}>English</option>
                    <option value={'uk'}>Українська</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Nav>
            {size[0] >= 768 && (
              <React.Fragment>
                {isAuth
                  ? (<UserImage/>)
                  : (
                    <div className={'navigation-li px-2'}>
                      <button className="nav-link px-2 m-auto login-button navigation-li" role="button" onClick={() => setLoginModalShow(true)}>{t('start')}</button>
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
