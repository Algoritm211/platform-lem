import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { registerUser } from '../../store/auth/auth.thunks'

const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Ім`я треба вказати обов`язково')
    .matches(/[^<>%$]/i, 'Присутні заборонені символи'),
  email: Yup.string()
    .required('Email треба вказати обов`язково')
    .email('Введіть дійсну email-адресу')
    .matches(/[^<>%$]/i, 'Присутні заборонені символи'),
  password: Yup.string()
    .required('Пароль треба вказати обов`язково')
    .min(6, 'Пароль має бути мінімум 6 символів')
    .matches(/[^<>%$]/i, 'Присутні заборонені символи'),
  confirmPassword: Yup.string()
    .matches(/[^<>%$]/i, 'Присутні заборонені символи')
    .oneOf([Yup.ref('password'), null], 'Паролі не співпадають'),
})

function RegistrationModal({ switchModals, ...props }) {
  const dispatch = useDispatch()
  // const [isTeacher, setIsTeacher] = useState(false)
  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: registrationValidationSchema,
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      const objToServer = {
        name: values.name,
        email: values.email,
        password: values.password,
        // role: isTeacher ? 'teacher' : 'student',
        role: 'student',
      }
      dispatch(registerUser(objToServer))
      formik.resetForm()
      props.onHide()
      // history.push('/main')
    },
  })
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
            <form className="signup-form" onSubmit={formik.handleSubmit}>
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className={'inputAuth'}
                  type="text" name="name" id="name"/>
                {formik.errors.name}
              </div>

              <div className="form-textbox">
                <label htmlFor="email">Email</label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={'inputAuth'}
                  type="email" name="email" id="email"/>
                {formik.errors.email}
              </div>

              <div className="form-textbox">
                <label htmlFor="pass">Password</label>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={'inputAuth'}
                  type="password" name="password" id="pass"/>
                {formik.errors.password}
              </div>

              <div className="form-textbox">
                <label htmlFor="confirm-pass">Confirm Password</label>
                <input
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  className={'inputAuth'}
                  type="password" name="confirmPassword" id="confirmPassword"/>
                {formik.errors.confirmPassword}
              </div>

              <div className="form-textbox">
                <button
                  type="submit" id="submit" className="submit" style={{ width: '100%' }}>
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
          <a className="loginhere-link" onClick={switchModals}>Log in</a>
        </p>
        <Button onClick={props.onHide} style={{ borderRadius: '8px', backgroundColor: '#0070f3' }}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RegistrationModal
