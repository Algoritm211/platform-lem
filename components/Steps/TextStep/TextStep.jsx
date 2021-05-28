import React, { useEffect } from 'react'
import { loadTextStep } from '../../../store/lessonSteps/thunks'
import Loader from '../../Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'

const TextStep = ({ stepId }) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)

  useEffect(() => {
    dispatch(loadTextStep(stepId))
  }, [stepId])

  if (!currentStep) {
    return <Loader />
  }
  return (
    <div>
      <p className="courses-lecture mt-3 mb-5" dangerouslySetInnerHTML={{ __html: currentStep.body }}/>
    </div>
  )
}

export default TextStep
