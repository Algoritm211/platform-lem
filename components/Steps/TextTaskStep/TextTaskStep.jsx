import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'
import { loadTextStep } from '../../../store/lessonSteps/text.thunk'
import { useTranslation } from 'next-i18next'
import { addStepToCompleted } from '../../../store/auth/user.thunks'
import { getUserData } from '../../../store/auth/selectors'
import { Button } from 'antd'
import AnswerAPI from '../../../api/api.answer'
import TextAnswerAPI from '../../../api/lessonTypes/api.textAnswer'

const TextTaskStep = ({ stepId }) => {
  const { t } = useTranslation('steps')
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)
  const user = useSelector(getUserData)
  const [answerText, setAnswerText] = useState('')
  console.log(user)

  useEffect(() => {
    dispatch(loadTextStep(stepId))
    if (!user?.stepsCompleted.includes(stepId)) {
      dispatch(addStepToCompleted(stepId))
    }
  }, [stepId])

  if (!currentStep) {
    return <Loader/>
  }

  const onSubmitAnswer = async () => {
    await AnswerAPI.add({
      text: answerText,
      score: currentStep.score || 3,
      stepType: 'TextWithAnswer',
      stepId: currentStep._id,
      userId: user._id,
    })
    await TextAnswerAPI.update(stepId,
      {
        body: currentStep.body,
        answer: answerText,
      })
    dispatch(loadTextAnswerStep(stepId))
    if (!user?.stepsCompleted?.includes(stepId)) {
      dispatch(addStepToCompleted(stepId))
    }
  }

  return (
    <div>
      <p className="courses-lecture mt-3 mb-5" dangerouslySetInnerHTML={{ __html: currentStep.body }}/>
      <textarea
        className="form-control inputAcc"
        value={answerText}
        onChange={(event) => setAnswerText(event.target.value)}
        placeholder={t('answer')} />
      {/* //TODO fix layout of button */}
      <Button disabled={!!currentStep.answer} onClick={onSubmitAnswer}>
        Submit
      </Button>
    </div>
  )
}

export default TextTaskStep
