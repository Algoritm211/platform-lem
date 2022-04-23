import React, { useEffect, useState } from 'react'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'
import { clearCurrentLesson, setCurrentLesson } from '../../store/lesson/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { updateLesson } from '../../store/lesson/thunks'
import TextStepEditor from '../Steps/TextStep/TextStepEditor'
import { getCurrentLesson } from '../../store/lesson/selectors'
import { setSteps } from '../../store/lessonSteps/reducer'
import { getSteps } from '../../store/lessonSteps/selectors'
import VideoStepEditor from '../Steps/VideoStep/VideoStepEditor'
import { useTranslation } from 'next-i18next'
import Loader from '../Loader/Loader'
import { createTextAnswerLesson, createTextLesson, createVideoLesson } from '../../store/lessonSteps/thunks'
import OpenAnswerStepEditor from '../Steps/OpenAnswerStep/OpenAnswerStepEditor'
import TestStepEditor from '../Steps/TestTaskStep/TestStepEditor'
import { createTestStep } from '../../store/lessonSteps/test.thunk'
import NewCourseNavbar from '../Navbars/NewCourseNavbar'
import { Layout } from 'antd'

const { Sider, Content } = Layout

const stepTypes = {
  Text: TextStepEditor,
  Video: VideoStepEditor,
  TextWithAnswer: OpenAnswerStepEditor,
  Test: TestStepEditor,
  Code: TestCodeEditor,
}

const stepIcons = {
  Text: 'fa-align-left',
  Video: 'fa-film',
  TextWithAnswer: 'fa-question',
  Test: 'fa-list-alt',
}

const LessonEditor = ({ lesson, course }) => {
  const { t } = useTranslation('editLesson')
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const [lessonTitle, setLessonTitle] = useState('')
  const [stepNumber, setStepNumber] = useState(0)
  const currentLesson = useSelector(getCurrentLesson)
  const steps = useSelector(getSteps)
  const [isCollapsed, setIsCollapsed] = useState(false)

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

  const onCollapse = (currentState) => {
    setIsCollapsed(!currentState)
  }

  const onTitleSave = () => {
    dispatch(updateLesson(lesson._id, { title: lessonTitle }))
  }

  if (!currentLesson) {
    return <Loader/>
  }

  const onChangeStep = (stepNum) => {
    setStepNumber(stepNum)
  }

  const onCreateTextLesson = async () => {
    setShow(false)
    dispatch(createTextLesson(currentLesson._id))
  }

  const onCreateVideoLesson = async () => {
    setShow(false)
    dispatch(createVideoLesson(currentLesson._id))
  }

  const onCreateTextAnswerLesson = async () => {
    setShow(false)
    dispatch(createTextAnswerLesson(currentLesson._id))
  }

  const onCreateTestLesson = async () => {
    setShow(false)
    dispatch(createTestStep(currentLesson._id))
  }

  const stepIconBlock = steps.map((step, index) => {
    return (
      <a className="mr-1" style={{ textDecoration: 'none' }} key={step.stepId}>
        <button
          onClick={() => onChangeStep(index)}
          className="lesson-btn d-flex"
          style={{
            backgroundColor: stepNumber === index ? '#63c76a' : '#212529',
          }}
        >
          <i className={`fas ${stepIcons[step.stepModel]}`}/>
        </button>
      </a>
    )
  })

  const StepBlock = stepTypes[steps[stepNumber].stepModel]

  const LessonEditorModalItem = ({ label, description, onClick }) => {
    return (
      <Col xs={12} md={6}>
        <div className="modal-task-type" onClick={onClick}>
          <i className="fas fa-align-left modal-task-ill"/>
          <div className="pl-3">
            <h3 className="modal-task-title">{label}</h3>
            <span className="modal-task-subtitle">
              {description}
            </span>
          </div>
        </div>
      </Col>
    )
  }

  const LessonEditorModal = ({ show, setShow }) => {
    return (
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
                <div
                  className="modal-task-type"
                  onClick={onCreateVideoLesson}
                >
                  <i className="fas fa-film modal-task-ill"/>
                  <div className="pl-3">
                    <h3 className="modal-task-title">{t('video')}</h3>
                    <span className="modal-task-subtitle">
                      {t('videoDesc')}
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div
                  className="modal-task-type"
                  onClick={onCreateTextAnswerLesson}
                >
                  <i className="fas fa-question modal-task-ill"/>
                  <div className="pl-3">
                    <h3 className="modal-task-title">{t('answer')}</h3>
                    <span className="modal-task-subtitle">
                      {t('answerDesc')}
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="modal-task-type" onClick={onCreateTestLesson}>
                  <i className="fas fa-list-alt modal-task-ill"/>
                  <div className="pl-3">
                    <h3 className="modal-task-title">{'Create test'}</h3>
                    <span className="modal-task-subtitle">
                      {'Create and edit test tasks'}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>

          </Container>
        </Modal.Body>
      </Modal>
    )
  }

  return (
    <div>
      <div className="container my-5">
        <Layout>
          <div className="d-none d-md-block">
            <Sider
              theme={'light'}
              collapsible
              width={150}
              collapsed={isCollapsed}
              onCollapse={() => onCollapse(isCollapsed)}
            >
              <NewCourseNavbar isCollapsed={isCollapsed}/>
            </Sider>
          </div>
          <Content>
            <div className="d-block d-md-none">
              <NewCourseNavbar isCollapsed={isCollapsed}/>
            </div>
            <div className="container">
              <h1 className="editor-title mb-5">{t('title')}</h1>
              <h3 className="editor-lesson-title mb-3">{t('lessonTitle')}</h3>
              <input
                className={'editor-input d-block my-auto'}
                value={lessonTitle}
                onChange={(event) => setLessonTitle(event.target.value)}
                type="text"
                placeholder="Lesson title"
                name="title"
                id="title"
              />
              <Button className="mt-3" onClick={onTitleSave}>
                {t('saveTitle')}
              </Button>
              <div className="my-5">
                <h3 className="editor-lesson-title mb-3">{t('plan')}</h3>
                <div className="d-flex">
                  {stepIconBlock}
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button
                      className="lesson-btn d-flex"
                      onClick={() => setShow(true)}
                    >
                      <i className="fas fa-plus"/>
                    </button>
                  </a>
                </div>
              </div>
              <h3 className="editor-lesson-title mt-5 mb-3">
                {t('step')} {stepNumber + 1} | {t('taskDescription')}
              </h3>
              <StepBlock stepId={steps[stepNumber].stepId}/>
            </div>
          </Content>
        </Layout>
        <LessonEditorModal show={show} setShow={setShow}/>
      </div>
    </div>
  )
}

export default LessonEditor
