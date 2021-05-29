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

const createCourseValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Назва обов`язково повинна бути присутня')
    .max(40, 'Назва має бути не більш ніж 40 символів')
    .matches(/[^<>%$]/i, 'Присутні заборонені символи'),
  description: Yup.string()
    .required('Опис обов`язково повинен бути присутнім')
    .min(20, 'Опис має бути більш ніж 20 символів')
    .max(120, 'Опис має бути не більш ніж 120 символів')
    .matches(/[^<>%$]/i, 'Присутні заборонені символи'),
  subject: Yup.string()
    .required('Обов`язково треба вибрати категорію')
    .matches(/^(?!subject\b)/i, 'Виберіть будь ласка одну з категорій'),
})

function CreateCourseModal({ ...props }) {
  const { t } = useTranslation('navbar')
  const router = useRouter()
  const dispatch = useDispatch()
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
              {/*<div className="form-textbox">*/}
                {/*<label htmlFor="courseImage" style={{ width: '100%' }}>Course image</label>*/}
                {/*<img*/}
                {/*  className="avatar-img my-auto mr-3"*/}
                {/*  src="https://i.pinimg.com/originals/84/15/e1/8415e1af255424efc151ed1cb79147b1.jpg"*/}
                {/*  alt="courseImage"/>*/}

                {/*{!isLoading ? (*/}
                {/*  <>*/}
                {/*<input*/}
                {/*  type={'file'}*/}
                {/*  id={'avatar'}*/}
                {/*  name={'avatar'}*/}
                {/*  onChange={onHandleImage}*/}
                {/*  multiple={false}*/}
                {/*  hidden={true} accept="image/jpeg,image/png"/>*/}
                {/*<label htmlFor={'avatar'} className="avatar-delete" style={{ color: '#0070f3', fontWeight: '600', fontSize: '12px' }}>Update</label>*/}
                {/*<span onClick={onDeletePhoto} className="avatar-delete">Delete</span>*/}
                {/*  </>*/}
                {/*) : (*/}
                {/*  <span className="avatar-change" style={{ cursor: 'progress' }}>Оновлення...</span>*/}
                {/*)}*/}
              {/*</div>*/}
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
                {formik.errors.title}
              </div>

              <div className="form-textbox">
                <label htmlFor="courseTitle">{t('shortDesc')}</label>
                <textarea
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  className="form-control inputAcc"
                  style={{ minHeight: '80px' }}
                  placeholder={t('tellAbout')}
                  id="description"/>
                {formik.errors.description}
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
                  <option value="design">{t('math')}</option>
                  <option value="business">{t('science')}</option>
                  <option value="education">{t('it')}</option>
                  <option value="marketing">{t('geography')}</option>
                  <option value="it">{t('art')}</option>
                  <option value="english">{t('english')}</option>
                  <option value="history">{t('history')}</option>
                </select>
                {formik.errors.subject}
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ borderRadius: '8px', backgroundColor: '#63c76a', border: '1px solid #63c76a' }} onClick={formik.submitForm}>
          {t('create')}
        </Button>
        <Button onClick={props.onHide} style={{ borderRadius: '8px', backgroundColor: '#0070f3' }}>{t('close')}</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateCourseModal
