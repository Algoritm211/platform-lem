import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function MyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="AuthTitle">Registration</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="containerReg">
          <div className="sign-up-content">
            <form className="signup-form">
              {/* <div className="form-radio">*/}
              {/*  <input className={`${isExpert ? 'inputRadio' : 'inputRadioChecked'}`} type="radio" name="member_level"*/}
              {/*    value="student" id="student"/>*/}
              {/*  <label htmlFor="student">Student</label>*/}

              {/*  <input className={`${isExpert ? 'inputRadioChecked' : 'inputRadio'}`} type="radio" name="member_level"*/}
              {/*    value="expert" id="expert"/>*/}
              {/*  <label htmlFor="expert">Expert</label>*/}
              {/* </div>*/}
              <div className="form-textbox">
                <label htmlFor="name">Full name</label>
                <input
                  className={'inputAuth'}
                  type="text" name="name" id="name"/>
              </div>

              <div className="form-textbox">
                <label htmlFor="email">Email</label>
                <input
                  className={'inputAuth'}
                  type="email" name="email" id="email"/>
              </div>

              <div className="form-textbox">
                <label htmlFor="pass">Password</label>
                <input
                  className={'inputAuth'}
                  type="password" name="password" id="pass"/>
              </div>

              <div className="form-textbox">
                <label htmlFor="confirm-pass">Confirm Password</label>
                <input
                  className={'inputAuth'}
                  type="password" name="repeatPassword" id="confirm-pass"/>
              </div>

              <div className="form-textbox">
                <button
                  name="submit" id="submit" className="submit" style={{ width: '100%' }}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p className="loginhere">
          Already have an account?&nbsp;
          <a href={'/login'} className="loginhere-link">Log in</a>
        </p>
        <Button onClick={props.onHide} style={{ borderRadius: '8px', backgroundColor: '#0070f3' }}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyCenteredModal
