import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentStep, getIsLoading } from '../../../store/lessonSteps/selectors'
import Loader from '../../Loader/Loader'
import { loadTestStep, updateTestStep } from '../../../store/lessonSteps/test.thunk'
import { useTranslation } from 'next-i18next'
import { clearCurrentStep } from '../../../store/lessonSteps/reducer'

const TestStepEditor = ({ stepId }) => {
  const { t } = useTranslation('steps')
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const currentStep = useSelector(getCurrentStep)
  const [testInfo, setTestInfo] = useState(null)

  useEffect(() => {
    dispatch(clearCurrentStep())
    dispatch(loadTestStep(stepId))
  }, [stepId])

  useEffect(() => {
    setTestInfo(currentStep)
  }, [currentStep])

  if (!currentStep || !testInfo) {
    return <Loader/>
  }

  const onChangeQuestion = (event) => {
    setTestInfo((prevState) => {
      return { ...prevState, question: event.target.value }
    })
  }

  const onChangeOption = (event, optionIndex) => {
    const options = [...testInfo.options]
    options[optionIndex] = event.target.value
    setTestInfo((prevState) => {
      return { ...prevState, options: options }
    })
  }

  const onAddOption = () => {
    setTestInfo((prevState) => {
      return { ...prevState, options: [...prevState.options, ''] }
    })
  }

  const onDeleteOption = (optionValue) => {
    const options = [...testInfo.options]
    const valueIndex = options.findIndex((option) => option === optionValue)
    const newOptions = [
      ...options.slice(0, valueIndex),
      ...options.slice(valueIndex + 1)]
    setTestInfo((prevState) => ({ ...prevState, options: newOptions }))
  }

  const onChangeAnswerType = (event) => {
    const newType = event.target.value
    let answers = [...testInfo.answers]
    if (newType === 'single') {
      answers = answers.slice(0, 1)
    }
    setTestInfo((prevState) => {
      return { ...prevState, answers: answers, type: event.target.value }
    })
  }

  const onSingleChange = (event) => {
    setTestInfo((prevState) => {
      return { ...prevState, answers: [event.target.value] }
    })
  }

  const onMultipleChange = (event) => {
    let answers = [...testInfo.answers]
    const checkboxValue = event.target.value
    if (answers.includes(checkboxValue)) {
      answers = answers.filter((item) => {
        return item !== checkboxValue
      })
    } else {
      answers = [...answers, checkboxValue]
    }
    setTestInfo((prevState) => ({ ...prevState, answers: answers }))
  }

  const onUpdateTestStep = () => {
    dispatch(updateTestStep(currentStep._id, testInfo))
  }

  const optionsBlock = testInfo?.options?.map((option, index) => {
    return (
      <div className="form-check d-flex profile-courses-one my-3 align-items-center" key={'option' + index}>
        {testInfo.type === 'single' ? (
          <input
            className="checkbox-editor mx-3"
            type="radio"
            onChange={onSingleChange}
            checked={testInfo.answers.includes(option)}
            value={option}/>
        ) : (
          <input
            value={option}
            onChange={onMultipleChange}
            className="checkbox-editor mx-3"
            type="checkbox"
            checked={testInfo.answers.includes(option)}/>
        )}
        <input
          className={'input-checkbox-editor'}
          type="variant"
          placeholder="Variant"
          value={option}
          onChange={(event) => onChangeOption(event, index)}
          name="variant"
          id="variant"/>
        <div style={{ margin: 'auto 20px' }}>
          <a style={{ textDecoration: 'none' }}>
            <button
              className="lesson-delete-btn d-flex"
              onClick={() => onDeleteOption(option)}>
              <i className="fas fa-trash-alt"/>
            </button>
          </a>
        </div>
      </div>
    )
  })
  return (
    <div>
      <h3 className="editor-lesson-title mt-5 mb-3">Write your question down below</h3>
      <textarea
        onChange={onChangeQuestion}
        value={testInfo.question}
        cols="40" rows="5"/>
      <h3 className="editor-lesson-title mt-5 mb-3">Write score of your question</h3>
      <input
        value={testInfo.score}
        type={'number'}
        min={1}
        onChange={(event) => setTestInfo((prevState) => ({ ...prevState, score: +event.target.value }))}
        className={'input-checkbox-editor'}
      />
      <h3 className="editor-lesson-title mt-5 mb-3">Write possible answers</h3>
      <ToggleButtonGroup type="radio" name="options" defaultValue={testInfo.type} style={{ borderRadius: '8px' }}>
        <ToggleButton id="tbg-radio-1" value={'single'} onClick={onChangeAnswerType}>
          Single answer
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={'multiple'} onClick={onChangeAnswerType}>
          Multiple answers
        </ToggleButton>
      </ToggleButtonGroup>
      {optionsBlock}
      <Button variant="primary" onClick={onAddOption} style={{ borderRadius: '8px', width: '70px' }}>
        <i className="fas fa-plus"/>
      </Button>
      <h3 className="editor-lesson-title mt-5 mb-3">Choose right answer(s)</h3>
      <br/>
      <Button
        onClick={onUpdateTestStep}
        className="mt-3"
        type={'submit'}
        disabled={isLoading}>{isLoading ? t('saving') : t('save')}</Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body closeButton>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <img className="content-image" src="/bucket.png" alt="photo"/>
              </Col>
              <Col xs={12} md={6} className="d-flex" style={{ alignItems: 'center' }}>
                <div className="m-auto">
                  <h3 className="profile-welcome-title d-block">Are you sure?</h3>
                  <span className="modal-task-subtitle d-block">Do you want to permanently delete everything now?</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger" style={{ borderRadius: '8px' }}>Yes, delete</Button>
          <Button onClick={() => setShow(false)} className="btn-primary" style={{ borderRadius: '8px' }}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TestStepEditor
