import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Container, Dropdown, Modal, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../store/auth/selectors'
import { unsubscribeCourse } from '../../store/courses/thunks'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const ProfileCourseCard = ({ course }) => {
  const { t } = useTranslation('teaching')
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector(getUserData)
  return (
    <div className="profile-courses-one d-flex my-3">
      <img className="profile-courses-one-img" src={course.coursePreview?.url || course.coursePreview} alt="preview-course-photo"/>
      <div className="profile-courses-one-content">
        <h3 className="profile-courses-one-title">{course.title}</h3>
        <p className="profile-courses-one-text">{course.description}</p>
        <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>{course.lessons.length} {t('lessons')}</p>
      </div>
      <div className="text-right ml-auto">
        <div className="custom-control custom-switch mb-4">
          <input
            type="checkbox"
            className="custom-control-input"
            id={course._id}
            readOnly
          />
          <label className="custom-control-label" htmlFor={course._id}>
            Public
          </label>
        </div>
        <Dropdown as={ButtonGroup} className="ml-auto my-auto">
          <Button
            className="course-view-btn d-flex"
            variant="primary" onClick={() => router.push(`/programs/${course._id}`)}>{t('view')}</Button>

          <Dropdown.Toggle className="course-view-btn" split variant="primary" id="dropdown-split-basic"/>

          <Dropdown.Menu>
            {user?._id === course.author._id && (
              <Link href={`/editor/${course._id}`}>
                <Dropdown.Item href={`/editor/${course._id}`}>{t('change')}</Dropdown.Item>
              </Link>
            )}
            <Dropdown.Item onClick={() => setShow(true)}>{t('delete')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
          <Button onClick={() => dispatch(unsubscribeCourse(course._id))} className="btn-danger" style={{ borderRadius: '8px' }}>Yes, delete</Button>
          <Button onClick={() => setShow(false)} className="btn-primary" style={{ borderRadius: '8px' }}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProfileCourseCard
