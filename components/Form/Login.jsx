import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="AuthTitle">Login</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="containerReg">
          <div className="sign-up-content">
            <form className="signup-form">
              <div className="form-textbox">
                <label htmlFor="email">Email</label>
                <input
                  className={'inputAuth'}
                  type="email"
                  name="email"
                  id="email"/>
              </div>

              <div className="form-textbox">
                <label htmlFor="pass">Password</label>
                <input
                  className={'inputAuth'}
                  type="password"
                  name="password"
                  id="password"/>
              </div>

              <div className="form-textbox">
                <button
                  type="submit" name="submit" id="submit" className="submit" value="Log in" style={{ width: '100%' }}>
                  Log in
                </button>
              </div>
            </form>

            <div className="form-textbox" style={{ textAlign: 'center' }}>
              <div className="or-container">
                <div className="line-separator"></div>
                <div className="or-label">or</div>
                <div className="line-separator"></div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-lg btn-google btn-block btn-outline">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Login Using Google
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <a className="btn btn-lg btn-facebook btn-block btn-outline" href="#">
                    <i className="fab fa-facebook"/> Login Using Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p className="loginhere">
          Do not have an account?&nbsp;
          <a href={'/registration'} className="loginhere-link cup">Sign up</a>
        </p>
        <Button onClick={props.onHide} style={{ borderRadius: '8px', backgroundColor: '#0070f3' }}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyVerticallyCenteredModal
