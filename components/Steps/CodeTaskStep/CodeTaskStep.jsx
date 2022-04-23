import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'
import { getCurrentStep } from '../../../store/lessonSteps/selectors'
import { loadTextAnswerStep } from '../../../store/lessonSteps/thunks'
import { useTranslation } from 'next-i18next'
import { addStepToCompleted } from '../../../store/auth/user.thunks'
import { getUserData } from '../../../store/auth/selectors'
import { Select } from 'antd'

const { Option } = Select
const CodeEditor = React.lazy(() => import('../../CodeEditor/CodeEditor'))

const OpenAnswerStep = ({ stepId }) => {
  const { t } = useTranslation('steps')
  const dispatch = useDispatch()
  const currentStep = useSelector(getCurrentStep)
  const user = useSelector(getUserData)

  useEffect(() => {
    dispatch(loadTextAnswerStep(stepId))
    if (!user?.stepsCompleted.includes(stepId)) {
      dispatch(addStepToCompleted(stepId))
    }
  }, [stepId])

  if (!currentStep) {
    return <Loader/>
  }

  const [editorValue, setEditorValue] = useState('')
  const [selectedLang, setSelectedLang] = useState('text/x-c++src')
  const [selectedTheme, setSelectedTheme] = useState('dracula')

  return (
    <div>
      <p className="courses-lecture mt-3 mb-5" dangerouslySetInnerHTML={{ __html: currentStep.body }}/>
      <div className="my-5">
        <div className="d-flex">
          <div className="d-flex mr-3 mb-2 align-items-center">
            <h6 className="m-0 mr-2">Language: </h6>
            <Select
              style={{ width: 120 }}
              value={selectedLang}
              onChange={(value) => setSelectedLang(value)}>
              <Option value="text/x-c++src">C++</Option>
              <Option value="python">Python</Option>
              <Option value="javascript">JavaScript</Option>
            </Select>
          </div>
          <div className="d-flex mb-2 align-items-center">
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
            language={selectedLang}
            theme={selectedTheme}
            value={editorValue}
            onChange={setEditorValue}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default OpenAnswerStep
