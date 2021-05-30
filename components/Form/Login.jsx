import React, { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { loginUser } from '../../store/auth/auth.thunks'
import { useTranslation } from 'next-i18next'
import { setUserAuthData } from '../../store/auth/reducer'

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Введіть дійсну email-адресу')
    .matches(/[^<>%$]/i, 'Присутні заборонені символи'),
  password: Yup.string()
    .required('Пароль треба вказати обов`язково')
    .min(6, 'Пароль має бути мінімум 6 символів')
    .matches(/[^<>%$]/i, 'Присутні заборонені символи'),
})

function LoginModal({ switchModals, ...props }) {
  const { t } = useTranslation('auth')

  const dispatch = useDispatch()
  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: loginValidationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(loginUser(values.email, values.password))
      props.onHide()
      formik.resetForm()
    },
  })

  const onCatchGoogleLogin = (messageEvent) => {
    if (messageEvent.origin === process.env.NEXT_PUBLIC_APP_URL) {
      const parsedData = JSON.parse(messageEvent.data)
      dispatch(setUserAuthData(parsedData.user))
      props.onHide()
    }
  }

  useEffect(() => {
    window.addEventListener('message', onCatchGoogleLogin)
    return () => {
      window.removeEventListener('message', onCatchGoogleLogin)
    }
  }, [])

  const onGoogleAuth = () => {
    const win = window.open(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/google`,
      'Auth',
      'width=500,height=500,status=yes,toolbar=no,menubar=no,location=no',
    )

    const timer = setInterval(() => {
      if (win.closed) {
        clearInterval(timer)
      }
    }, 100)
  }


  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="AuthTitle">{t('login')}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="containerReg">
          <div className="sign-up-content">
            <form className="signup-form" onSubmit={formik.handleSubmit}>
              <div className="form-textbox">
                <label htmlFor="email">Email</label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={'inputAuth'}
                  type="email"
                  name="email"
                  id="email"/>
                {formik.errors.email}
              </div>

              <div className="form-textbox">
                <label htmlFor="pass">{t('pass')}</label>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={'inputAuth'}
                  type="password"
                  name="password"
                  id="password"/>
                {formik.errors.password}
              </div>

              <div className="form-textbox">
                <button
                  type="submit" name="submit" id="submit" className="submit" value="Log in" style={{ width: '100%' }}>
                  {t('logInButton')}
                </button>
              </div>
            </form>

            <div className="form-textbox" style={{ textAlign: 'center' }}>
              <div className="or-container">
                <div className="line-separator"/>
                <div className="or-label">{t('or')}</div>
                <div className="line-separator"/>
              </div>
              <div className="row">
                <div className="col-md-12" onClick={onGoogleAuth}>
                  <button className="btn btn-lg btn-google btn-block btn-outline">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt={'googleImg'}/> {t('google')}
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <a className="btn btn-lg btn-facebook btn-block btn-outline" href="#">
                    <i className="fab fa-facebook"/> {t('facebook')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p className="loginhere">
          {t('changeToReg')}&nbsp;
          <a className="loginhere-link cup" onClick={switchModals}>{t('changeReg')}</a>
        </p>
        <Button onClick={props.onHide} style={{ borderRadius: '8px', backgroundColor: '#0070f3' }}>{t('close')}</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginModal
