import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'
import { loadCodeStep } from '../../../store/lessonSteps/code.thunk'
import { useTranslation } from 'next-i18next'
import { addStepToCompleted } from '../../../store/auth/user.thunks'
import { getUserData } from '../../../store/auth/selectors'
import { Alert, Select } from 'antd'
import { Button } from 'react-bootstrap'
import CodeStepAPI from '../../../api/lessonTypes/api.code'
import AnswerAPI from '../../../api/api.answer'

const { Option } = Select
const CodeEditor = React.lazy(() => import('../../CodeEditor/CodeEditor'))

const OpenAnswerStep = ({ stepId }) => {
  const { t } = useTranslation('steps')
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)
  const user = useSelector(getUserData)

  useEffect(() => {
    dispatch(loadCodeStep(stepId))
    if (!user?.stepsCompleted.includes(stepId)) {
      dispatch(addStepToCompleted(stepId))
    }
  }, [stepId])

  if (!currentStep) {
    return <Loader/>
  }

  const [editorValue, setEditorValue] = useState('')
  const [selectedTheme, setSelectedTheme] = useState('eclipse')
  const [runCodeResult, setRunCodeResult] = useState(currentStep.answer || null)
  const [isCodeRunning, setIsCodeRunning] = useState(false)


  const checkCode = async (codeObj) => {
    setIsCodeRunning(true)
    const data = await CodeStepAPI.checkCode(codeObj)
    setRunCodeResult(data)
    // TODO: here is editorValue passed in text field, make sure that it will successfully saved
    await AnswerAPI.add({
      text: editorValue,
      score: data.isValid ? currentStep.score : 0,
      stepType: 'Code',
      stepId: currentStep._id,
      userId: user._id,
    })
    setIsCodeRunning(false)
  }

  const checkCodeGenerator = () => {
    return {
      tests: currentStep.tests,
      language: currentStep.language,
      code: editorValue,
    }
  }

  const backgroundCodeColor = (value) => {
    if (value?.isValid) {
      return '#f7f7f7'
    } else if (value?.isValid === false) {
      return '#F5EBF2'
    } else {
      return 'inherit'
    }
  }

  return (
    <div>
      <p className="courses-lecture my-3" dangerouslySetInnerHTML={{ __html: currentStep.body }}/>
      <div
        className="py-5"
        style={{ background: backgroundCodeColor(runCodeResult) }}>
        <div className="d-flex">
          <div className="d-flex mb-2 align-items-center mr-3">
            <h6 className="m-0 mr-2">Language: </h6>
            <Select
              disabled
              style={{ width: 120 }}
              value={currentStep.language}
            >
              <Option value="python3">Python</Option>
              <Option value="nodejs">JavaScript</Option>
            </Select>
          </div>

          <div className="d-flex mb-2 align-items-center mr-3">
            <h6 className="m-0 mr-2">Theme: </h6>
            <Select
              style={{ width: 120 }}
              value={selectedTheme}
              onChange={(value) => setSelectedTheme(value)}>
              <Option value="eclipse">Eclipse</Option>
              <Option value="idea">Idea</Option>
              <Option value="material">Material</Option>
              <Option value="dracula">Dracula</Option>
            </Select>
          </div>
        </div>
        <Suspense fallback={<Loader/>}>
          <CodeEditor
            language="python"
            theme={selectedTheme}
            value={currentStep.answer || editorValue}
            onChange={setEditorValue}
          />
        </Suspense>

        {runCodeResult?.isValid === false
          ? <div className="m-3">
            <Alert
              type="error"
              message={runCodeResult.errorMessage}
            />
          </div>
          : null}
      </div>
      <pre>
        {JSON.stringify(currentStep, null, 2)}
      </pre>
      <pre>
        {JSON.stringify({
          text: editorValue,
          score: runCodeResult.isValid ? currentStep.score : 0,
          stepType: 'Code',
          stepId: currentStep._id,
          userId: user._id,
        }, null, 2)}
      </pre>
      <Button
        onClick={() => checkCode(checkCodeGenerator())}
        className="mt-3"
        disabled={isCodeRunning}>{isCodeRunning ? t('running') : t('run')}</Button>
    </div>
  )
}

export default OpenAnswerStep
