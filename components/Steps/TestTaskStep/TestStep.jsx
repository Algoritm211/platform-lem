import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'
import { getUserData } from '../../../store/auth/selectors'
import { loadTestStep } from '../../../store/lessonSteps/test.thunk'
import { Button } from 'react-bootstrap'
import { countArrayEntries } from '../../utils/lessonFunctions'
import { addStepToCompleted } from '../../../store/auth/user.thunks'
import AnswerAPI from '../../../api/api.answer'
import { useTranslation } from 'next-i18next'
import { useQuery } from 'react-query'

const TestStep = ({ stepId, lesson }) => {
  const { t } = useTranslation('steps')
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)
  const user = useSelector(getUserData)
  const [testInfo, setTestInfo] = useState(null)
  const { data: presentAnswer, refetch } = useQuery(['answer', currentStep._id, user._id],
    () => AnswerAPI.getOne(currentStep._id))

  useEffect(() => {
    dispatch(loadTestStep(stepId))
  }, [stepId])

  useEffect(() => {
    setTestInfo(currentStep)
  }, [currentStep])

  if (!currentStep || !testInfo || !presentAnswer) {
    return <Loader/>
  }

  const onMultipleChange = (event) => {
    let userAnswers = [...testInfo.userAnswers]
    const checkboxValue = event.target.value
    if (userAnswers.includes(checkboxValue)) {
      userAnswers = userAnswers.filter((item) => {
        return item !== checkboxValue
      })
    } else {
      userAnswers = [...userAnswers, checkboxValue]
    }
    setTestInfo((prevState) => ({ ...prevState, userAnswers: userAnswers }))
  }

  const onSingleChange = (event) => {
    setTestInfo((prevState) => {
      return { ...prevState, userAnswers: [event.target.value] }
    })
  }

  const onTestSubmit = async () => {
    let result = 0
    const score = testInfo.score
    const rightAnswers = testInfo.answers
    const userAnswers = testInfo.userAnswers
    const rightUserAnswersCount = countArrayEntries(rightAnswers, userAnswers)
    if ((rightUserAnswersCount === userAnswers.length) && userAnswers.length !== 0) {
      result = score
    }

    await AnswerAPI.add({
      text: userAnswers.join(', '),
      score: result,
      stepType: 'Test',
      stepId: currentStep._id,
      userId: user._id,
    })

    if (!user?.stepsCompleted?.includes(stepId)) {
      dispatch(addStepToCompleted(stepId))
    }
    refetch()
    dispatch(loadTestStep(stepId))
  }

  const OptionInputItem = ({ inputType, disabled, checked, value }) => {
    const optionInputInfo
      = inputType === 'single'
        ? {
          optionInputType: 'radio',
          onChangeFn: (event) => onSingleChange(event),
        }
        : {
          optionInputType: 'checkbox',
          onChangeFn: (event) => onMultipleChange(event),
        }

    return (
      <input
        disabled={disabled}
        className="checkbox-editor mx-3"
        type={optionInputInfo.optionInputType}
        onChange={optionInputInfo.onChangeFn}
        checked={checked}
        value={value}/>
    )
  }

  const hasAnswer = !!presentAnswer?.answer
  const answers = presentAnswer?.answer?.text.split(', ') || []

  const optionsBlock = testInfo?.options?.map((option, index) => {
    console.log(option, answers)
    return (
      <div className="form-check d-flex profile-courses-one my-3 align-items-center" key={'option' + index}>
        <OptionInputItem
          disabled={hasAnswer}
          inputType={testInfo.type}
          checked={!hasAnswer ? testInfo.userAnswers.includes(option) : answers.includes(option)}
          value={option}
        />
        <div>{option}</div>
      </div>
    )
  })

  return (
    <>
      <p className="courses-lecture mt-3 mb-5">
        {currentStep.question}
      </p>
      <h3 className="editor-lesson-title mt-5 mb-3">Choose all right answers</h3>
      {optionsBlock}
      <div className="my-3">
        <Button
          disabled={hasAnswer}
          onClick={onTestSubmit}>
          Відповісти
        </Button>
      </div>

      {hasAnswer ? <p>{t('cantChangeAnswer')}</p> : null}

    </>
  )
}

export default TestStep
