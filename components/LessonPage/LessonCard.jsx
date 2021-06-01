import React, { useState } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { deleteLesson } from '../../store/lesson/thunks'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { useTranslation } from 'next-i18next'

const LessonCard = ({ lesson, lessonIndex }) => {
  const { t } = useTranslation('navbar')
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(deleteLesson(lesson._id))
  }
  return (
    <div className="profile-courses-one flexMobile my-3">
      <div className="d-flex">
        <h3 className="profile-courses-one-lessonNumber">{lessonIndex + 1}.</h3>
        <div className="profile-courses-one-content">
          <h3 className="profile-courses-one-title">{lesson.title || t('noTitle') }</h3>
          <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>{t('comment')}</p>
        </div>
      </div>
      <div className="d-flex ml-auto">
        {/* <div className="custom-control custom-switch d-flex mr-auto" style={{ alignItems: 'center' }}>*/}
        {/*  <input*/}
        {/*    onChange={(event) => console.log(event.target.value)}*/}
        {/*    type="checkbox"*/}
        {/*    className="custom-control-input"*/}
        {/*    // disabled={false}*/}
        {/*    id={lesson._id}*/}
        {/*    // readOnly*/}
        {/*  />*/}
        {/*  <label className="custom-control-label" htmlFor={lesson._id}>*/}
        {/*    Public*/}
        {/*  </label>*/}
        {/* </div>*/}
        <div style={{ margin: 'auto 5px auto 10px' }}>
          <Link href={`/editlesson/${lesson._id}`}>
            <a style={{ textDecoration: 'none' }}>
              <button className="lesson-btn d-flex">
                <i className="fas fa-pen"/>
              </button>
            </a>
          </Link>
        </div>

        <div style={{ margin: 'auto 0' }}>
          <a style={{ textDecoration: 'none' }}>
            <button className="lesson-delete-btn d-flex" onClick={() => setShow(true)}>
              <i className="fas fa-trash-alt"/>
            </button>
          </a>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body closeButton>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <img className="content-image" src="/bucket.png" alt="photo"/>
              </Col>
              <Col xs={12} md={6} className="d-flex" style={{ alignItems: 'center' }}>
                <div className="m-auto">
                  <h3 className="profile-welcome-title d-block">{t('sure')}</h3>
                  <span className="modal-task-subtitle d-block">{t('delete')}</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onDelete} className="btn-danger" style={{ borderRadius: '8px' }}>{t('yes')}</Button>
          <Button onClick={() => setShow(false)} className="btn-primary" style={{ borderRadius: '8px' }}>{t('close')}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default LessonCard
