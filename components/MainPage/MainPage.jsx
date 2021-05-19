import React, { useState } from 'react'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'


const MainPage = () => {
  const [loginModalShow, setLoginModalShow] = useState(false)
  const [registrationModalShow, setRegistrationModalShow] = useState(false)

  const switchModals = () => {
    setLoginModalShow((prev) => !prev)
    setRegistrationModalShow((prev) => !prev)
  }
  return (
    <div>
      <div className="container first-block my-3">
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
        <div className="row">
          <div className="col-2 col-md-1 b-radius" style={{ backgroundColor: '#B2CCFC' }}>
            <h3 className="vertical-title mb-2">Categories</h3>
          </div>
          <div className="col-10 col-md-11 pr-sm-0 mr-sm-0">
            <div className="row">
              <div className="col-12 col-md-6">
                <a className="card-link" href="#">
                  <div
                    className="b-radius category-card d-flex p-3 mb-3"
                    style={{ backgroundColor: '#8cdac8' }}>
                    <div className="col-4 m-auto">
                      <img className="content-image" src="/2.png" alt="photo"/>
                    </div>
                    <div className="col-8">
                      <h3 className="content-subtitle mb-2">Chemistry</h3>
                      <p className="content-subtext">Lorem ipsum dolor sit amet, consectetur dolor
                        sit amet, consectetur</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6">
                <a className="card-link" href="#">
                  <div
                    className="b-radius category-card d-flex p-3 mb-3"
                    style={{ backgroundColor: '#f0c4d7' }}>
                    <div className="col-4 m-auto">
                      <img className="content-image" src="/2.png" alt="photo"/>
                    </div>
                    <div className="col-8">
                      <h3 className="content-subtitle mb-2">Math</h3>
                      <p className="content-subtext">Lorem ipsum dolor sit amet, consectetur dolor
                        sit amet, consectetur</p>
                    </div>
                  </div>
                </a>
              </div>


              <div className="col-12 col-md-6">
                <a className="card-link" href="#">
                  <div
                    className="b-radius category-card d-flex p-3 mb-md-0 mb-3"
                    style={{ backgroundColor: '#f0c4d7' }}>
                    <div className="col-4 m-auto">
                      <img className="content-image" src="/2.png" alt="photo"/>
                    </div>
                    <div className="col-8">
                      <h3 className="content-subtitle mb-2">Biology</h3>
                      <p className="content-subtext">Lorem ipsum dolor sit amet, consectetur dolor
                        sit amet, consectetur</p>
                    </div>
                  </div>
                </a>
              </div>


              <div className="col-12 col-md-6"><a className="card-link" href="#">
                <div
                  className="b-radius category-card d-flex p-3 mb-0"
                  style={{ backgroundColor: '#8cdac8' }}>
                  <div className="col-4 m-auto">
                    <img className="content-image" src="/2.png" alt="photo"/>
                  </div>
                  <div className="col-8">
                    <h3 className="content-subtitle mb-2">Physics</h3>
                    <p className="content-subtext">Lorem ipsum dolor sit amet, consectetur dolor
                      sit amet, consectetur</p>
                  </div>
                </div>
              </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
