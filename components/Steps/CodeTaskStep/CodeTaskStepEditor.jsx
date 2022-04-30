import React, { Suspense, useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { getCurrentStep, getIsLoading } from '../../../store/lessonSteps/selectors'
import { loadCodeStep, updateCodeStep } from '../../../store/lessonSteps/code.thunk'
import Loader from '../../Loader/Loader'
import { useTranslation } from 'next-i18next'
import { Select } from 'antd'

const { Option } = Select

const CodeEditor = React.lazy(() => import('../../CodeEditor/CodeEditor'))

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16),
  )
}

const TestItemHeader = ({ testInfo, onRemove }) => {
  return (
    <div className="d-flex align-items-center justify-content-between p-3">
      <h5>
        Test {testInfo.uuid}
      </h5>
      <button
        className="btn d-flex m-3 btn-danger"
        style={{ padding: '15px', borderRadius: '8px' }}
        onClick={onRemove}
      >
        <i className="fas fa-trash-alt"/>
      </button>
    </div>
  )
}

const TestItemInputSection = ({ value, label, onChange }) => {
  return (
    <div className="p-3">
      <h5>{label}</h5>
      <Suspense fallback={<Loader/>}>
        <CodeEditor
          language="textile"
          theme="eclipse"
          value={value}
          onChange={onChange}
        />
      </Suspense>
    </div>
  )
}

const TestItemContent = ({ testInfo, onInputValueChange, onOutputValueChange }) => {
  return (
    <>
      <TestItemInputSection
        value={testInfo.test}
        onChange={onInputValueChange}
        label="Input"/>
      <TestItemInputSection
        value={testInfo.expected}
        onChange={onOutputValueChange}
        label="Output"/>
    </>
  )
}

const TestItem = ({ testInfo, onRemoveTest, onInputValueChange, onOutputValueChange }) => {
  return (
    <div
      className="m-2"
      style={{
        background: 'white',
        borderRadius: '8px',
      }}>
      <TestItemHeader testInfo={testInfo} onRemove={onRemoveTest}/>
      <TestItemContent
        testInfo={testInfo}
        onInputValueChange={onInputValueChange}
        onOutputValueChange={onOutputValueChange}/>
    </div>
  )
}


const CodeTaskStepEditor = ({ stepId }) => {
  const { t } = useTranslation('steps')
  const [codeInfo, setCodeInfo] = useState({ tests: [] })
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const currentStep = useSelector(getCurrentStep)

  useEffect(() => {
    dispatch(loadCodeStep(stepId))
  }, [stepId])

  if (!currentStep) {
    return <Loader/>
  }

  const addTest = () => {
    setCodeInfo({
      ...codeInfo,
      tests: [...codeInfo.tests, { uuid: uuidv4(), test: '', expected: '' }],
    })
  }

  const removeTest = (test) => {
    const newTests = codeInfo.tests.filter((el) => el.uuid !== test.uuid)
    setCodeInfo({
      ...codeInfo,
      tests: newTests,
    })
  }

  const inputChange = (testInfo, value) => {
    const newTestValues = codeInfo.tests.map((test) => {
      if (test.uuid === testInfo.uuid) test.test = value
      return test
    })
    setCodeInfo((prev) => {
      return {
        ...prev,
        tests: newTestValues,
      }
    })
  }

  const outputChange = (testInfo, value) => {
    const newTestValues = codeInfo.tests.map((test) => {
      if (test.uuid === testInfo.uuid) test.expected = value
      return test
    })
    setCodeInfo((prev) => {
      return {
        ...prev,
        tests: newTestValues,
      }
    })
  }

  const testList = codeInfo.tests.map((test) => {
    return (
      <TestItem
        key={test.uuid}
        testInfo={test}
        onRemoveTest={() => removeTest(test)}
        onInputValueChange={(value) => inputChange(test, value)}
        onOutputValueChange={(value) => outputChange(test, value)}
      />
    )
  })

  const onUpdateStep = () => {
    dispatch(updateCodeStep(currentStep._id, { body: textContent }))
  }

  const onChangeEditor = (value) => {
    setCodeInfo((prevState) => {
      return { ...prevState, body: value }
    })
  }

  const onChangeScore = (event) => setCodeInfo((prevState) => ({ ...prevState, score: +event.target.value }))

  return (
    <div>
      <div className="my-3" style={{ backgroundColor: '#f1f1f1' }}>
        <h3 className="editor-lesson-title p-3">{t('codeTask')}</h3>
        <Editor
          apiKey={'j2rcg8qaqco0x9y81b1jn5dc0ze3phyfbapmnra5q59deqml'}
          initialValue={currentStep.body}
          init={{
            width: '100%',
            min_height: 300,
            borderRadius: '8px',
            selector: 'textarea',
            plugins: [
              'advlist autolink lists link image charmap print preview hr anchor pagebreak',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              `undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help`,
          }}
          onEditorChange={onChangeEditor}
        />
      </div>

      <div className="my-3" style={{ backgroundColor: '#f1f1f1' }}>
        <h3 className="editor-lesson-title p-3">{t('score')}</h3>
        <input
          value={codeInfo.score}
          type={'number'}
          min={1}
          onChange={onChangeScore}
          className={'input-checkbox-editor'}
        />
      </div>

      <div className="my-3" style={{ backgroundColor: '#f1f1f1' }}>
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="editor-lesson-title p-3">{t('tests')}</h3>
          <button
            className="lesson-btn d-flex m-3"
            onClick={addTest}
          >
            <i className="fas fa-plus"/>
          </button>
        </div>
        <div className="p-1">
          {testList}
        </div>
      </div>

      <pre>
        {JSON.stringify({ codeInfo }, null, 2)}
      </pre>

      <Button
        onClick={onUpdateStep}
        className="mt-3"
        type={'submit'}
        disabled={isLoading}>{isLoading ? t('saving') : t('save')}</Button>
    </div>
  )
}

export default CodeTaskStepEditor
