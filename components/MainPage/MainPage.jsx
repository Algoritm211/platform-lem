import React, { useState } from 'react'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'
import Carousel from '../CoursePage/Subject-carousel'
import withPageSize from '../HOC/withPageSize'


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
              <p className="content-text">Learn easier and more efficiently thanks to your school's platform. All your classmates are already here</p>
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
        <h2 className="category-picker py-3">Learn Easy</h2>
        <p>
          On this platform, you have the opportunity to independently study both the school curriculum and certain courses on the topics presented on our platform. The platform is an adapted teaching program
          that is taught in both schools and universities.
        </p>
      </div>
      <div className="container my-5">
        <h2 className="category-picker py-3">Choose your favourite subject</h2>
        <div className="row">
          <div className={`col-12 col-md-4 ${size[0] < 576 ? 'mb-3': ''}`}>
            <div className="carousel-card" style={{ backgroundColor: 'rgb(240, 196, 215)', height: '100%' }}>
              <h3 className="carousel-title" style={{ color: 'rgb(137, 81, 105)' }}>Chemistry</h3>
              <p className="carousel-subtitle" style={{ color: 'rgb(137, 81, 105)' }}>2 courses</p></div>
          </div>
          <div className="col-6 col-md-4">
            <div className="carousel-card mb-3" style={{ backgroundColor: 'rgb(240, 196, 215)' }}>
              <h3 className="carousel-title" style={{ color: 'rgb(137, 81, 105)' }}>Chemistry</h3>
              <p className="carousel-subtitle" style={{ color: 'rgb(137, 81, 105)' }}>2 courses</p>
            </div>
            <div className="carousel-card" style={{ backgroundColor: 'rgb(240, 196, 215)' }}>
              <h3 className="carousel-title" style={{ color: 'rgb(137, 81, 105)' }}>Chemistry</h3>
              <p className="carousel-subtitle" style={{ color: 'rgb(137, 81, 105)' }}>2 courses</p>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="carousel-card mb-3" style={{ backgroundColor: 'rgb(240, 196, 215)' }}>
              <h3 className="carousel-title" style={{ color: 'rgb(137, 81, 105)' }}>Chemistry</h3>
              <p className="carousel-subtitle" style={{ color: 'rgb(137, 81, 105)' }}>2 courses</p>
            </div>
            <div className="carousel-card" style={{ backgroundColor: 'rgb(240, 196, 215)' }}>
              <h3 className="carousel-title" style={{ color: 'rgb(137, 81, 105)' }}>Chemistry</h3>
              <p className="carousel-subtitle" style={{ color: 'rgb(137, 81, 105)' }}>2 courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withPageSize(MainPage)
