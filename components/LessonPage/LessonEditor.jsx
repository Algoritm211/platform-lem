import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'
import { clearCurrentLesson, setCurrentLesson } from '../../store/lesson/reducer'
import { updateLesson } from '../../store/lesson/thunks'
import { getCurrentLesson } from '../../store/lesson/selectors'
import { setSteps } from '../../store/lessonSteps/reducer'
import { getSteps } from '../../store/lessonSteps/selectors'
import { useTranslation } from 'next-i18next'

import LectureStepEditor from '../Steps/LectureStep/LectureStepEditor'
import VideoStepEditor from '../Steps/VideoStep/VideoStepEditor'
import TextTaskStepEditor from '../Steps/TextTaskStep/TextTaskStepEditor'
import TestStepEditor from '../Steps/TestTaskStep/TestStepEditor'
import CodeTaskStepEditor from '../Steps/CodeTaskStep/CodeTaskStepEditor'

import { createVideoStep } from '../../store/lessonSteps/video.thunk'
import { createTextStep } from '../../store/lessonSteps/text.thunk'
import { createCodeStep } from '../../store/lessonSteps/code.thunk'
import { createLectureStep } from '../../store/lessonSteps/lecture.thunk'
import { createTestStep } from '../../store/lessonSteps/test.thunk'
import NewCourseNavbar from '../Navbars/NewCourseNavbar'
import Loader from '../Loader/Loader'

import { Layout, message } from 'antd'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import Link from 'next/link'

const { Sider, Content } = Layout

const stepTypes = {
  Text: LectureStepEditor,
  Video: VideoStepEditor,
  TextWithAnswer: TextTaskStepEditor,
  Test: TestStepEditor,
  Code: CodeTaskStepEditor,
}

const stepIcons = {
  Text: 'fa-align-left',
  Video: 'fa-film',
  TextWithAnswer: 'fa-question',
  Test: 'fa-list-alt',
  Code: 'fa-code',
}

const LessonEditorModal = ({ show, setShow }) => {
  const { t } = useTranslation('editLesson')
  const dispatch = useDispatch()
  const currentLesson = useSelector(getCurrentLesson)

  const onCreateLectureStep = async () => {
    setShow(false)
    message.success(t('lectureStepMessage'))
    dispatch(createLectureStep(currentLesson._id))
  }

  const onCreateVideoStep = async () => {
    setShow(false)
    message.success(t('videoStepMessage'))
    dispatch(createVideoStep(currentLesson._id))
  }

  const onCreateTextStep = async () => {
    setShow(false)
    message.success(t('textStepMessage'))
    dispatch(createTextStep(currentLesson._id))
  }

  const onCreateTestStep = async () => {
    setShow(false)
    message.success(t('testStepMessage'))
    dispatch(createTestStep(currentLesson._id))
  }

  const onCreateCodeStep = async () => {
    setShow(false)
    message.success(t('codeStepMessage'))
    dispatch(createCodeStep(currentLesson._id))
  }

  const selectTypeBtns = [
    {
      title: t('text'),
      description: t('textDesc'),
      onClickFn: (() => onCreateLectureStep()),
      iconClass: 'fa-align-left',
    },
    {
      title: t('video'),
      description: t('videoDesc'),
      onClickFn: (() => onCreateVideoStep()),
      iconClass: 'fa-film',
    },
    {
      title: t('answer'),
      description: t('answerDesc'),
      onClickFn: (() => onCreateTextStep()),
      iconClass: 'fa-question',
    },
    {
      title: t('test'),
      description: t('testDesc'),
      onClickFn: (() => onCreateTestStep()),
      iconClass: 'fa-list-alt',
    },
    {
      title: t('code'),
      description: t('codeDesc'),
      onClickFn: (() => onCreateCodeStep()),
      iconClass: 'fa-code',
    },
  ]

  const TaskTypeItem = ({ title, description, onClickFn, iconClass }) => {
    return (
      <Col xs={12} md={6}>
        <div className="modal-task-type" onClick={onClickFn}>
          <i className={`fas modal-task-ill ${iconClass}`}/>
          <div className="pl-3">
            <h3 className="modal-task-title">{title}</h3>
            <span className="modal-task-subtitle">
              {description}
            </span>
          </div>
        </div>
      </Col>
    )
  }

  const taskMenuType = selectTypeBtns.map((item) => {
    return (
      <TaskTypeItem
        key={item.title}
        title={item.title}
        description={item.description}
        onClickFn={item.onClickFn}
        iconClass={item.iconClass}/>
    )
  })


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
            {taskMenuType}
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

const LessonEditor = ({ lesson, course }) => {
  const { t } = useTranslation('editLesson')
  const dispatch = useDispatch()
  const [lessonTitle, setLessonTitle] = useState('')
  const [stepNumber, setStepNumber] = useState(0)
  const [show, setShow] = useState(false)
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
    message.success(t('titleSaveMessage'))
    dispatch(updateLesson(lesson._id, { title: lessonTitle }))
  }

  if (!currentLesson) {
    return <Loader/>
  }

  const onChangeStep = (stepNum) => {
    setStepNumber(stepNum)
  }

  const stepIconBlock = steps.map((step, index) => {
    return (
      <div key={index} className="mr-1 mb-1">
        <h6 className="d-flex justify-content-center">{index + 1}</h6>
        <a style={{ textDecoration: 'none' }} key={step.stepId}>
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
      </div>
    )
  })

  const StepBlock = stepTypes[steps[stepNumber].stepModel]

  return (
    <div>
      <div className="container py-5">
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
            <Link href={`/lesson/${lesson._id}`}>
              <Button
                variant="outline-primary"
                style={{ position: 'fixed', top: '60px', right: '20px' }}>{t('checkLesson')}</Button>
            </Link>
            <div className="px-0 px-md-3">
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
                <div style={{ overflow: 'auto' }} className="d-flex">
                  {stepIconBlock}
                  <a className="mr-1 mb-1 mt-auto" style={{ textDecoration: 'none' }}>
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
