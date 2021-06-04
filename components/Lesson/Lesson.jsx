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
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import OpenAnswerStep from '../Steps/OpenAnswerStep/OpenAnswerStep'
import TestStep from '../Steps/TestTaskStep/TestStep'

const stepTypes = {
  Text: TextStep,
  Video: VideoStep,
  TextWithAnswer: OpenAnswerStep,
  Test: TestStep,
}
const LessonPage = ({ lesson, course }) => {
  const { t } = useTranslation('steps')
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
            <h3 className="editor-lesson-title">{t('task')} {stepNumber + 1}</h3>
            <StepBlock stepId={currentStep.stepId} lesson={currentLesson}/>
          </div>
          <div className="col-12 col-sm-12 col-md-4" style={{ overflow: 'auto' }}>
            <h1 className="courses-title mb-5">{course.title}</h1>
            <p className="course-description m-0">{t('author')}</p>
            <p className="course-description mb-5">{course.author.name}</p>
            {stepNumber !== 0 && (
              <Button className="btn-primary mb-5 mr-3" onClick={() => onChangeStep(-1)}>{t('previous')}</Button>
            )}
            {stepNumber !== steps.length - 1 && (
              <Button className="btn-primary mb-5 mr-3" onClick={() => onChangeStep(1)}>{t('next')}</Button>
            )}
            <Link href={`/lessonslist/${course._id}`}>
              <Button
                variant="outline-primary"
                style={{ position: 'fixed', top: '60px', right: '20px' }}>{t('back')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonPage
