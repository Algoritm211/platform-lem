import React, { useState } from 'react'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'
import withPageSize from '../HOC/withPageSize'
import Link from 'next/link'


const MainPage = ({ size }) => {
  const [loginModalShow, setLoginModalShow] = useState(false)
  const [registrationModalShow, setRegistrationModalShow] = useState(false)

  const switchModals = () => {
    setLoginModalShow((prev) => !prev)
    setRegistrationModalShow((prev) => !prev)
  }
  return (
    <div>
      <div className="container my-3">
        <div style={{ backgroundColor: '#B2CCFC', borderRadius: '8px' }}>
          <div className="row">
            <div className="col-12 col-md-4 p-5 m-auto">
              <h3 className="content-title mb-2">School On Web-site</h3>
              <p className="content-text">Learn easier and more efficiently thanks to your school`s platform. All your classmates are already here</p>
              <button className="content-btn" onClick={() => setLoginModalShow(true)}>Get Started</button>
            </div>
            <div className="col-12 col-md-8 m-auto">
              <img className="content-image" src="/11.png" alt="photo"/>
            </div>
          </div>
        </div>
      </div>
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

      <div className="container my-5">
        <div className="row d-flex" style={{ alignItems: 'center' }}>
          <div className="col-12 col-md-3 my-3">
            <h2 className="category-picker m-auto">Learn Easy</h2>
          </div>
          <div className="col-12 col-md-9 my-3">
            <p className="content-text" style={{ margin: '0' }}>On this platform, you have the opportunity to independently study both the school curriculum and certain courses on the topics presented on our
              platform. The platform is an adapted teaching
              program that is taught in both schools and universities.</p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row d-flex" style={{ alignItems: 'center' }}>
          <div className="col-12 col-md-6 my-3">
            <img className="content-image" src="/12.png" alt="photo"/>
          </div>
          <div className="col-12 col-md-6 my-3">
            <h2 className="category-picker my-3">Create courses</h2>
            <p className="content-text" style={{ margin: '0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row d-flex" style={{ alignItems: 'center' }}>
          <div className="col-12 col-md-6 my-3">
            <h2 className="category-picker my-3">Additional lessons</h2>
            <p className="content-text mb-3" style={{ margin: '0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link href={'/programs'}>
              <a style={{ textDecoration: 'none' }}>
                <button className="content-btn">Go to course page</button>
              </a>
            </Link>
          </div>
          <div className="col-12 col-md-6 my-3">
            <img className="content-image" src="/13.png" alt="photo"/>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="category-picker py-3">Choose your favorite subject</h2>
        <div className="row">
          <div className={`col-12 col-md-4 ${size[0] < 768 ? 'mb-3' : ''}`}>
            <Link href={'/programs'}>
              <a style={{ textDecoration: 'none' }}>
                <div className="carousel-card d-flex" style={{ backgroundColor: '#f7f7fc', height: '100%', alignItems: 'center' }}>
                  <h3 className="carousel-title m-0 pr-2">Check course`s page</h3>
                  <i className="fas fa-arrow-right"/>
                  {/* <p className="carousel-subtitle" style={{ color: 'rgb(137, 81, 105)' }}>2 courses</p></div>*/}
                </div>
              </a>
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <Link href={'/'}>
              <a style={{ textDecoration: 'none' }}>
                <div className="carousel-card mb-3" style={{ backgroundColor: '#B2CCFC' }}>
                  <h3 className="carousel-title" style={{ color: '#466aa8' }}>Math</h3>
                  <p className="carousel-subtitle" style={{ color: '#466aa8' }}>12 courses</p>
                </div>
              </a></Link>
            <Link href={'/'}>
              <a style={{ textDecoration: 'none' }}>
                <div className="carousel-card" style={{ backgroundColor: 'rgb(240, 196, 215)' }}>
                  <h3 className="carousel-title" style={{ color: 'rgb(137, 81, 105)' }}>Chemistry</h3>
                  <p className="carousel-subtitle" style={{ color: 'rgb(137, 81, 105)' }}>2 courses</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <Link href={'/'}>
              <a style={{ textDecoration: 'none' }}>
                <div className="carousel-card mb-3" style={{ backgroundColor: '#8cdac8' }}>
                  <h3 className="carousel-title" style={{ color: '#408971' }}>Biology</h3>
                  <p className="carousel-subtitle" style={{ color: '#408971' }}>4 courses</p>
                </div>
              </a></Link>
            <Link href={'/'}>
              <a style={{ textDecoration: 'none' }}>
                <div className="carousel-card" style={{ backgroundColor: '#B2CCFC' }}>
                  <h3 className="carousel-title" style={{ color: '#466aa8' }}>IT</h3>
                  <p className="carousel-subtitle" style={{ color: '#466aa8' }}>7 courses</p>
                </div>
              </a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withPageSize(MainPage)
