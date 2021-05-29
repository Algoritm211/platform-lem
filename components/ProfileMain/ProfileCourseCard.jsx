import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Dropdown, Modal, ProgressBar, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../store/auth/selectors'
import { toggleCourseIsReady, unsubscribeCourse } from '../../store/courses/thunks'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { getIsLoading } from '../../store/courses/selectors'
import { percentCompletedCourse } from '../utils/lessonFunctions'

const ProfileCourseCard = ({ course }) => {
  const { t } = useTranslation('teaching')
  const [show, setShow] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const isLoading = useSelector(getIsLoading)
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector(getUserData)
  let percentCompleted = 0
  if (user.stepsCompleted) {
    percentCompleted = percentCompletedCourse(user.stepsCompleted, course)
  }

  useEffect(() => {
    setIsReady(course.isReady)
  }, [])

  const onToggleIsReady = () => {
    dispatch(toggleCourseIsReady(course._id))
    setIsReady((prev) => !prev)
  }

  return (
    <div className="profile-courses-one my-3">
      <div className="d-flex">
        <img className="profile-courses-one-img" src={course.coursePreview?.url || course.coursePreview} alt="preview-course-photo"/>
        <div className="profile-courses-one-content">
          <h3 className="profile-courses-one-title">{course.title}</h3>
          <p className="profile-courses-one-text">{course.description}</p>
          <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>{course.lessons.length} {t('lessons')}</p>
          {percentCompleted !== 0 && (
            <ProgressBar style={{ width: '90%' }} className="programs-progress-bar d-flex" now={percentCompleted} label={`${percentCompleted}%`}/>
          )}
        </div>
      </div>
      <div className="text-right ml-auto profile-toolkit">
        {user?.coursesAuthor.includes(course._id) && (
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id={course._id}
              onChange={onToggleIsReady}
              disabled={isLoading}
              checked={isReady}
            />
            <label className="custom-control-label" htmlFor={course._id}>
              {isReady ? t('public') : t('private')}
            </label>
          </div>
        )}
        <Dropdown as={ButtonGroup} className="ml-auto mt-auto dropdown-button">
          <Button
            className="course-view-btn d-flex"
            disabled={!isReady}
            variant="primary" onClick={() => router.push(`/programs/${course._id}`)}>{t('view')}</Button>

          <Dropdown.Toggle className="course-view-btn" split variant="primary" id="dropdown-split-basic"/>

          <Dropdown.Menu>
            {user?._id === course.author._id && (
              <Link href={`/editor/${course._id}`}>
                <Dropdown.Item className="course-view-text" href={`/editor/${course._id}`}>{t('change')}</Dropdown.Item>
              </Link>
            )}
            <Dropdown.Item className="course-view-text" onClick={() => setShow(true)}>{t('delete')}</Dropdown.Item>
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
                  <h3 className="profile-welcome-title d-block">{t('sure')}</h3>
                  <span className="modal-task-subtitle d-block">{t('want')}</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => dispatch(unsubscribeCourse(course._id))} className="btn-danger" style={{ borderRadius: '8px' }}>{t('yesDelete')}</Button>
          <Button onClick={() => setShow(false)} className="btn-primary" style={{ borderRadius: '8px' }}>{t('close')}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProfileCourseCard
