import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'
import { loadTextStep } from '../../../store/lessonSteps/text.thunk'
import { useTranslation } from 'next-i18next'
import { addStepToCompleted } from '../../../store/auth/user.thunks'
import { getUserData } from '../../../store/auth/selectors'
import { Button } from 'react-bootstrap'
import AnswerAPI from '../../../api/api.answer'
import TextStepAPI from '../../../api/lessonTypes/api.text'
import { useQuery } from 'react-query'

const TextTaskStepTextArea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className="form-control inputAcc"
      value={value}
      onChange={onChange}
      placeholder={placeholder}/>
  )
}

const TextTaskStep = ({ stepId }) => {
  const { t } = useTranslation('steps')
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)
  const user = useSelector(getUserData)
  const [answerText, setAnswerText] = useState('')
  const { data: presentAnswer, refetch } = useQuery(['answer', currentStep._id],
    () => AnswerAPI.getOne(currentStep._id))

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
    await refetch()
    await TextStepAPI.update(stepId,
      {
        body: currentStep.body,
      })
    dispatch(loadTextStep(stepId))
    if (!user?.stepsCompleted?.includes(stepId)) {
      dispatch(addStepToCompleted(stepId))
    }
  }

  return (
    <div>
      <p className="courses-lecture mt-3 mb-5" dangerouslySetInnerHTML={{ __html: currentStep.body }}/>
      {/* TODO: it is not current user answer, need refactoring on the backend side */}
      {presentAnswer?.answer?.text
        ? <textarea
          disabled
          className="form-control inputAcc"
          value={presentAnswer?.answer?.text}/>
        : <TextTaskStepTextArea
          value={answerText}
          onChange={(event) => setAnswerText(event.target.value)}
          placeholder={t('answer')}
        />}

      <div className="my-3">
        <Button disabled={!!presentAnswer?.answer} onClick={onSubmitAnswer}>
          Submit
        </Button>
      </div>

      {presentAnswer?.answer ? <p>{t('cantChangeAnswer')}</p> : null}

    </div>
  )
}

export default TextTaskStep
