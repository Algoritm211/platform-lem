import React, { useEffect, useState } from 'react'
import CourseNavbar from '../Navbars/CourseNavbar'
import Link from 'next/link'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'
import { clearCurrentLesson, setCurrentLesson } from '../../store/lesson/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { updateLesson } from '../../store/lesson/thunks'
import TextStepEditor from '../Steps/TextStep/TextStepEditor'
import { getCurrentLesson } from '../../store/lesson/selectors'
import { setCurrentStep, setSteps } from '../../store/lessonSteps/reducer'
import { getSteps } from '../../store/lessonSteps/selectors'
import VideoStepEditor from '../Steps/VideoStep/VideoStepEditor'

const stepTypes = {
  text: TextStepEditor,
  video: VideoStepEditor,
}

const stepIcons = {
  text: 'fa-align-left',
  video: 'fa-film',
}

const LessonEditor = ({ lesson, course }) => {
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

  if (!currentLesson || !currentStep) {
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
            <h1 className="editor-title mb-5">Settings of the lesson</h1>
            <h3 className="editor-lesson-title mb-3">Lesson title</h3>
            <input
              className={'editor-input d-block my-auto'}
              value={lessonTitle}
              onChange={(event) => setLessonTitle(event.target.value)}
              type="text"
              placeholder="Course title"
              name="title"
              id="title"/>
            <Button onClick={onTitleSave}>Save lesson title</Button>
            <div className="my-5">
              <h3 className="editor-lesson-title mb-3">Lesson plan</h3>
              <div className="d-flex">
                {stepIconBlock}
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex">
                      <i className="fas fa-plus"/>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
            <h3 className="editor-lesson-title mt-5 mb-3">Step {stepNumber + 1} | Task description</h3>
            <StepBlock stepData={currentStep.stepId}/>
          </div>


          <div className="container">

          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonEditor
