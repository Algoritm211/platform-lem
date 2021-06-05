import React, { useEffect } from 'react'
import { loadTextStep } from '../../../store/lessonSteps/thunks'
import Loader from '../../Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'
import { getUserData } from '../../../store/auth/selectors'
import { addStepToCompleted } from '../../../store/auth/user.thunks'

const TextStep = ({ stepId }) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)
  const user = useSelector(getUserData)
  // console.log(currentStep)

  useEffect(() => {
    dispatch(loadTextStep(stepId))
    if (!user?.stepsCompleted?.includes(stepId)) {
      dispatch(addStepToCompleted(stepId))
    }
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
