import React, { useEffect, useState } from 'react'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'
import { clearCurrentLesson, setCurrentLesson } from '../../store/lesson/reducer'
import { setSteps } from '../../store/lessonSteps/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentLesson } from '../../store/lesson/selectors'
import { getSteps } from '../../store/lessonSteps/selectors'
import TextStep from '../Steps/TextStep/TextStep'
import { getCurrentCourse } from '../../store/courses/selectors'
import Loader from '../Loader/Loader'
import VideoStep from '../Steps/VideoStep/VideoStep'
import { Button } from 'react-bootstrap'

const stepTypes = {
  Text: TextStep,
  Video: VideoStep,
}
const LessonPage = ({ lesson, course }) => {
  const dispatch = useDispatch()
  const currentLesson = useSelector(getCurrentLesson)
  const currentCourse = useSelector(getCurrentCourse)
  const steps = useSelector(getSteps)
  const [stepNumber, setStepNumber] = useState(0)
  const currentStep = steps[stepNumber]

  useEffect(() => {
    dispatch(setCurrentCourse(course))
    dispatch(setCurrentLesson(lesson))
    dispatch(setSteps(lesson.steps))
    return () => {
      dispatch(clearCurrentCourse())
      dispatch(clearCurrentLesson())
    }
  }, [])

  if (!currentLesson || !currentCourse) {
    return <Loader/>
  }

  const onChangeStep = (num) => {
    setStepNumber(stepNumber + num)
  }

  const StepBlock = stepTypes[currentStep.stepModel]

  return (
    <div>
      <div className="container course-page mt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 image-fix">
            <h1 className="category-picker">{lesson.title}</h1>
            <h3 className="editor-lesson-title">Task {stepNumber + 1}</h3>
            <StepBlock stepId={currentStep.stepId}/>
          </div>
          <div className="col-12 col-sm-12 col-md-4" style={{ overflow: 'auto' }}>
            <h3 className="courses-subtitle">Lesson №1</h3>
            <h1 className="courses-title mb-5">{course.title}</h1>
            <p className="course-description m-0">Author of the course</p>
            <p className="course-description mb-5">{course.author.name}</p>
            {stepNumber !== 0 && (
              <Button className="btn-primary mb-5 mr-3" onClick={() => onChangeStep(-1)}>Назад</Button>
            )}
            {stepNumber !== steps.length - 1 && (
              <Button className="btn-primary mb-5 mr-3" onClick={() => onChangeStep(1)}>Далее</Button>
            )}
            <Button href="javascript:history.back()" variant="outline-primary" style={{ position: 'fixed', top: '60px', right: '20px' }}>Back to course</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LessonPage
