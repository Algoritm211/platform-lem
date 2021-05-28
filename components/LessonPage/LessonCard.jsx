import React, { useState } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { deleteLesson } from '../../store/lesson/thunks'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'

const LessonCard = ({ lesson, lessonIndex }) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(deleteLesson(lesson._id))
  }
  return (
    <div className="profile-courses-one d-flex my-3">
      <h3 className="profile-courses-one-lessonNumber">{lessonIndex + 1}.</h3>
      <div className="profile-courses-one-content">
        <h3 className="profile-courses-one-title">{lesson.title || 'No title'}</h3>
        <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>9 tasks and exercises</p>
      </div>
      <div className="ml-auto">
        <Link href={`/editlesson/${lesson._id}`}>
          <a style={{ textDecoration: 'none' }}>
            <button className="lesson-btn d-flex">
              <i className="fas fa-pen"/>
            </button>
          </a>
        </Link>
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
                  <h3 className="profile-welcome-title d-block">Are you sure?</h3>
                  <span className="modal-task-subtitle d-block">Do you want to permanently delete everything now?</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onDelete} className="btn-danger" style={{ borderRadius: '8px' }}>Yes, delete</Button>
          <Button onClick={() => setShow(false)} className="btn-primary" style={{ borderRadius: '8px' }}>Close</Button>
        </Modal.Footer>
      </Modal>
      <div className="ml-1">
        <a style={{ textDecoration: 'none' }}>
          <button className="lesson-delete-btn d-flex" onClick={() => setShow(true)}>
            <i className="fas fa-trash-alt"/>
          </button>
        </a>
      </div>
    </div>
  )
}

export default LessonCard
