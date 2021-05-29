import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'
import { loadTextAnswerStep } from '../../../store/lessonSteps/thunks'

const OpenAnswerStep = ({ stepId }) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)
  const [answerText, setAnswerText] = useState('')

  useEffect(() => {
    dispatch(loadTextAnswerStep(stepId))
  }, [stepId])

  if (!currentStep) {
    return <Loader/>
  }

  return (
    <div>
      <p className="courses-lecture mt-3 mb-5" dangerouslySetInnerHTML={{ __html: currentStep.body }}/>
      <textarea
        value={answerText}
        onChange={(event) => setAnswerText(event.target.value)}
        placeholder={'Type your answer here'} />
    </div>
  )
}

export default OpenAnswerStep
