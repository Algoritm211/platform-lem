import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'
import { getUserData } from '../../../store/auth/selectors'
import { loadTestStep } from '../../../store/lessonSteps/test.thunk'
import { Button } from 'react-bootstrap'
import { countArrayEntries } from '../../utils/lessonFunctions'
import { addStepToCompleted } from '../../../store/auth/user.thunks'
import TestStepAPI from '../../../api/lessonTypes/api.test'
import AnswerAPI from '../../../api/api.answer'

const TestStep = ({ stepId, lesson }) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)
  const user = useSelector(getUserData)
  const [testInfo, setTestInfo] = useState(null)

  useEffect(() => {
    dispatch(loadTestStep(stepId))
  }, [stepId])

  useEffect(() => {
    setTestInfo(currentStep)
  }, [currentStep])

  if (!currentStep || !testInfo) {
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

    await TestStepAPI.addUserAnswer(currentStep._id, {
      userAnswers,
    })
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

    dispatch(loadTestStep(stepId))
  }

  const optionsBlock = testInfo?.options?.map((option, index) => {
    return (
      <div className="form-check d-flex profile-courses-one my-3 align-items-center" key={'option' + index}>
        {testInfo.type === 'single' ? (
          <input
            className="checkbox-editor mx-3"
            type="radio"
            onChange={onSingleChange}
            checked={testInfo.userAnswers.includes(option)}
            value={option}/>
        ) : (
          <input
            value={option}
            onChange={onMultipleChange}
            className="checkbox-editor mx-3"
            type="checkbox"
            checked={testInfo.userAnswers.includes(option)}/>
        )}
        <div>{option}</div>
      </div>
    )
  })

  return (
    <div>
      <p className="courses-lecture mt-3 mb-5">
        {currentStep.question}
      </p>
      <h3 className="editor-lesson-title mt-5 mb-3">Choose all right answers</h3>
      {optionsBlock}
      <br/>
      <Button
        disabled={currentStep?.userAnswers?.length !== 0}
        variant="info"
        onClick={onTestSubmit}>
        Відповісти
      </Button>
    </div>
  )
}

export default TestStep
