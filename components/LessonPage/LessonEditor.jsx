import React, { useEffect, useState } from 'react'
import CourseNavbar from '../Navbars/CourseNavbar'
import Link from 'next/link'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'
import { clearCurrentLesson, setCurrentLesson } from '../../store/lesson/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { updateLesson } from '../../store/lesson/thunks'
import TextStepEditor from '../Steps/TextStep/TextStepEditor'
import { getCurrentLesson } from '../../store/lesson/selectors'
import { setCurrentStep, setSteps } from '../../store/lessonSteps/reducer'
import { getSteps } from '../../store/lessonSteps/selectors'
import VideoStepEditor from '../Steps/VideoStep/VideoStepEditor'
import { useTranslation } from 'next-i18next'

const stepTypes = {
  text: TextStepEditor,
  video: VideoStepEditor,
}

const stepIcons = {
  text: 'fa-align-left',
  video: 'fa-film',
}

const LessonEditor = ({ lesson, course }) => {
  const { t } = useTranslation('editLesson')
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const [lessonTitle, setLessonTitle] = useState()
  const [stepNumber, setStepNumber] = useState(0)
  const currentLesson = useSelector(getCurrentLesson)
  const steps = useSelector(getSteps)
  const currentStep = steps[stepNumber]

  useEffect(() => {
    dispatch(setCurrentCourse(course))
    dispatch(setCurrentLesson(lesson))
    dispatch(setSteps(lesson.steps))
    setLessonTitle(lesson.title)
    return () => {
      dispatch(clearCurrentCourse())
      dispatch(clearCurrentLesson())
    }
  }, [])

  const onTitleSave = () => {
    dispatch(updateLesson(lesson._id, { title: lessonTitle }))
  }

  if (!currentLesson) {
    return <div>loading...</div>
  }

  const onChangeStep = (stepNum) => {
    setCurrentStep(steps[stepNum + 1])
    setStepNumber(stepNum)
  }

  const stepIconBlock = steps.map((step, index) => {
    return (
      <a className="mr-1" style={{ textDecoration: 'none' }} key={step.stepId._id}>
        <button
          onClick={() => onChangeStep(index)}
          className="lesson-btn d-flex"
          style={{ backgroundColor: stepNumber === index ? '#63c76a' : '#212529' }}>
          <i className={`fas ${stepIcons[step.stepId.type]}`}/>
        </button>
      </a>
    )
  })

  const StepBlock = stepTypes[currentStep.stepId.type]

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3 col-md-2">
            <CourseNavbar/>
          </div>
          <div className="col-sm-9 col-md-10">
            <h1 className="editor-title mb-5">{t('title')}</h1>
            <h3 className="editor-lesson-title mb-3">{t('lessonTitle')}</h3>
            <input
              className={'editor-input d-block my-auto'}
              value={lessonTitle}
              onChange={(event) => setLessonTitle(event.target.value)}
              type="text"
              placeholder="Course title"
              name="title"
              id="title"/>
            <Button className="mt-3" onClick={onTitleSave}>{t('saveTitle')}</Button>
            <div className="my-5">
              <h3 className="editor-lesson-title mb-3">{t('plan')}</h3>
              <div className="d-flex">
                {stepIconBlock}
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex" onClick={() => setShow(true)}>
                      <i className="fas fa-plus"/>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
            <h3 className="editor-lesson-title mt-5 mb-3">{t('step')} {stepNumber + 1} | {t('taskDescription')}</h3>
            <StepBlock stepData={currentStep.stepId}/>
          </div>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {t('modalType')}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col xs={12} md={6}>
                    <div className="modal-task-type">
                      <i className="fas fa-align-left modal-task-ill"/>
                      <div className="pl-3">
                        <h3 className="modal-task-title">{t('text')}</h3>
                        <span className="modal-task-subtitle">{t('textDesc')}</span>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="modal-task-type">
                      <i className="fas fa-film modal-task-ill"/>
                      <div className="pl-3">
                        <h3 className="modal-task-title">{t('video')}</h3>
                        <span className="modal-task-subtitle">{t('videoDesc')}</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default LessonEditor
