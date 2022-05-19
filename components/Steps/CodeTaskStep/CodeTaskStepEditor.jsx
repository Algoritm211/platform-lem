import React, { Suspense, useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { getCurrentStep, getIsLoading } from '../../../store/lessonSteps/selectors'
import { loadCodeStep, updateCodeStep, deleteCodeStep } from '../../../store/lessonSteps/code.thunk'
import Loader from '../../Loader/Loader'
import { useTranslation } from 'next-i18next'
import { Select } from 'antd'

const { Option } = Select

const CodeEditor = React.lazy(() => import('../../CodeEditor/CodeEditor'))

const TestItemHeader = ({ onRemove, index }) => {
  return (
    <div className="d-flex align-items-center justify-content-between p-3">
      <h5>
        Test №{index + 1}
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

const TestItem = ({ testInfo, onRemoveTest, onInputValueChange, onOutputValueChange, index }) => {
  return (
    <div
      className="m-2"
      style={{
        background: 'white',
        borderRadius: '8px',
      }}>
      <TestItemHeader onRemove={onRemoveTest} index={index}/>
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
      tests: [...codeInfo.tests, { test: '', expected: '' }],
    })
  }

  const removeTest = (index) => {
    const before = codeInfo.tests.slice(0, index)
    const after = codeInfo.tests.slice(index + 1)

    setCodeInfo({
      ...codeInfo,
      tests:
        [...before,
          ...after],
    })
  }

  const testChange = (index, value, field) => {
    const newTestValues = codeInfo.tests.map((test, testIndex) => {
      if (index === testIndex) test[field] = value
      return test
    })
    setCodeInfo((prev) => {
      return {
        ...prev,
        tests: newTestValues,
      }
    })
  }

  const testList = codeInfo.tests.map((test, index) => {
    return (
      <TestItem
        key={index}
        index={index}
        testInfo={test}
        onRemoveTest={() => removeTest(index)}
        onInputValueChange={(value) => testChange(index, value, 'test')}
        onOutputValueChange={(value) => testChange(index, value, 'expected')}
      />
    )
  })

  const onUpdateStep = () => {
    dispatch(updateCodeStep(currentStep._id, codeInfo))
  }

  const onChangeEditor = (value) => {
    setCodeInfo((prevState) => {
      return { ...prevState, body: value }
    })
  }

  const onDeleteLesson = () => {
    dispatch(deleteCodeStep(currentStep._id))
  }

  const onChangeScore = (event) => setCodeInfo((prevState) => ({ ...prevState, score: +event.target.value }))
  const onChangeLanguage = (value) => setCodeInfo((prevState) => ({ ...prevState, language: value }))

  return (
    <div>
      <div className="my-3" style={{ backgroundColor: '#f1f1f1' }}>
        <div className='d-flex align-items-center justify-content-between'>
          <h3 className="editor-lesson-title p-3">{t('codeTask')}</h3>
          <Button
            className="mt-3 btn-danger"
            onClick={onDeleteLesson}
          >
            <i className="fas fa-trash-alt" />
          </Button>
        </div>
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
          onChange={(value) => onChangeScore(value)}
          className={'input-checkbox-editor'}
        />
      </div>

      <div className="my-3" style={{ backgroundColor: '#f1f1f1' }}>
        <h3 className="editor-lesson-title p-3">{t('language')}</h3>
        <Select
          placeholder={t('languagePlaceholder')}
          style={{ width: '100%' }}
          value={codeInfo.language}
          onChange={(value) => onChangeLanguage(value)}>
          <Option value="python3">Python</Option>
          <Option value="nodejs">JavaScript</Option>
        </Select>
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

      {/*
      <pre>
        {JSON.stringify({ codeInfo }, null, 2)}
      </pre>
      */}

      <Button
        onClick={onUpdateStep}
        className="mt-3"
        type={'submit'}
        disabled={isLoading}>{isLoading ? t('saving') : t('save')}</Button>
    </div>
  )
}

export default CodeTaskStepEditor
