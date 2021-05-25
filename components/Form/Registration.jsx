import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { registerUser } from '../../store/auth/auth.thunks'
import { useTranslation } from 'next-i18next'

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
  const { t } = useTranslation('auth')

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
          <h1 className="AuthTitle">{t('registration')}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="containerReg">
          <div className="sign-up-content">
            <form className="signup-form" onSubmit={formik.handleSubmit}>
              <div className="form-textbox">
                <label htmlFor="name">{t('name')}</label>
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
                <label htmlFor="pass">{t('pass')}</label>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={'inputAuth'}
                  type="password" name="password" id="pass"/>
                {formik.errors.password}
              </div>

              <div className="form-textbox">
                <label htmlFor="confirm-pass">{t('confPass')}</label>
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
                  {t('signUpButton')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p className="loginhere">
          {t('changeToLogin')}&nbsp;
          <a className="loginhere-link" onClick={switchModals}>{t('changeLogin')}</a>
        </p>
        <Button onClick={props.onHide} style={{ borderRadius: '8px', backgroundColor: '#0070f3' }}>{t('close')}</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RegistrationModal
