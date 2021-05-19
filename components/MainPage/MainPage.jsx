import React, { useState } from 'react'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'
import Carousel from '../CoursePage/Subject-carousel'


const MainPage = () => {
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
              <h3 className="content-title mb-2">Get Free Education</h3>
              <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor</p>
              <button className="content-btn" onClick={() => setLoginModalShow(true)}>Get Started</button>
            </div>
            <div className="col-12 col-md-8 m-auto">
              <img className="content-image" src="/1.png" alt="photo"/>
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
        <h2 className="category-picker py-3">Subjects</h2>
        <Carousel />
      </div>
    </div>
  )
}

export default MainPage
