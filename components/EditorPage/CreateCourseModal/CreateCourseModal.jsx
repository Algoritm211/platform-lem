import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import CourseAPI from '../../../api/api.course'
import { setCurrentCourse } from '../../../store/courses/reducer'
import { useRouter } from 'next/router'
import { addCourseToUser } from '../../../store/auth/reducer'
import { useTranslation } from 'next-i18next'
import { message } from 'antd'

const createCourseValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Назва обов`язково повинна бути присутня')
    .max(40, 'Назва має бути не більш ніж 40 символів')
    .matches(/[^<>%$]/i, 'Присутні заборонені символи'),
  subject: Yup.string()
    .required('Обов`язково треба вибрати категорію')
    .matches(/^(?!subject\b)/i, 'Виберіть будь ласка одну з категорій'),
})

function CreateCourseModal({ ...props }) {
  const { t } = useTranslation('navbar')
  const router = useRouter()
  const dispatch = useDispatch()

  const success = () => {
    message.success(t('successCreatedCourse'))
  }

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: createCourseValidationSchema,
    initialValues: {
      title: '',
      description: '',
      subject: '',
    },
    onSubmit: async (values) => {
      const formData = new FormData()
      /* eslint-disable */
      for (let field in values) {
        if (values.hasOwnProperty(field)) {
          formData.append(field, values[field])
        }
      }
      const data = await CourseAPI.create(formData)
      dispatch(addCourseToUser(data.course._id))
      dispatch(setCurrentCourse(data.course))
      props.onHide()
      await router.push(`/editor/${data.course._id}`)
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
          <h1 className="AuthTitle">{t('createCourse')}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="containerReg">
          <div className="sign-up-content">
            <form className="signup-form" onSubmit={formik.handleSubmit}>
              <div className="form-textbox">
                <label htmlFor="courseTitle">{t('courseTitle')}</label>
                <input
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  className={'inputAuth inputAcc'}
                  type="courseTitle"
                  placeholder={t('courseTitle')}
                  name="title"
                  id="title"/>
                <p className="m-0" style={{color: "red"}}>{formik.errors.title}</p>
              </div>

              <div className="form-textbox">
                <label htmlFor="subject" style={{ width: '100%' }}>{t('subject')}</label>
                <select
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  name={'subject'}
                  id={'subject'}
                  className="form-select mr-3"
                  aria-label="Default select example">
                  <option defaultValue>{t('subject')}</option>
                  <option value="math">{t('math')}</option>
                  <option value="science">{t('science')}</option>
                  <option value="it">{t('it')}</option>
                  <option value="geography">{t('geography')}</option>
                  <option value="art">{t('art')}</option>
                  <option value="english">{t('english')}</option>
                  <option value="history">{t('history')}</option>
                </select>
                <p className="m-0" style={{color: "red"}}>{formik.errors.subject}</p>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={formik.values.subject === t('subject') || formik.values.subject === null || formik.values.title === '' }
          style={{ borderRadius: '8px', backgroundColor: '#63c76a', border: '1px solid #63c76a' }}
          onClick={() => {
            formik.submitForm()
            success()}
          }>
          {t('create')}
            </Button>
            <Button onClick={props.onHide} style={{borderRadius: '8px', backgroundColor: '#0070f3'}}>{t('close')}</Button>
            </Modal.Footer>
            </Modal>
            )
          }

          export default CreateCourseModal
