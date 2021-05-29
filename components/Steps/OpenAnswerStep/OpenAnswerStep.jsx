import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'
import { loadTextAnswerStep } from '../../../store/lessonSteps/thunks'
import { useTranslation } from 'next-i18next'
import { addStepToCompleted } from '../../../store/auth/user.thunks'
import { getUserData } from '../../../store/auth/selectors'

const OpenAnswerStep = ({ stepId }) => {
  const { t } = useTranslation('steps')
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)
  const user = useSelector(getUserData)
  const [answerText, setAnswerText] = useState('')

  useEffect(() => {
    dispatch(loadTextAnswerStep(stepId))
    if (!user?.stepsCompleted.includes(stepId)) {
      dispatch(addStepToCompleted(stepId))
    }
  }, [stepId])

  if (!currentStep) {
    return <Loader/>
  }

  return (
    <div>
      <p className="courses-lecture mt-3 mb-5" dangerouslySetInnerHTML={{ __html: currentStep.body }}/>
      <textarea
        className="form-control inputAcc"
        value={answerText}
        onChange={(event) => setAnswerText(event.target.value)}
        placeholder={t('answer')} />
    </div>
  )
}

export default OpenAnswerStep
