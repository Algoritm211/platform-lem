import React, { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { getCurrentStep, getIsLoading } from '../../../store/lessonSteps/selectors'
import { loadTextStep, updateTextStep, deleteTextStep } from '../../../store/lessonSteps/text.thunk'
import Loader from '../../Loader/Loader'
import { useTranslation } from 'next-i18next'
import { message } from 'antd'

const TextTaskStepEditor = ({ stepId }) => {
  const { t } = useTranslation('steps')
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const [textContent, setTextContent] = useState('')
  const currentStep = useSelector(getCurrentStep)

  useEffect(() => {
    dispatch(loadTextStep(stepId))
  }, [stepId])

  if (!currentStep) {
    return <Loader />
  }

  const onUpdateStep= () => {
    message.success(t('updateTextStepMessage'))
    dispatch(updateTextStep(currentStep._id, { body: textContent }))
  }

  const onDeleteLesson = () => {
    dispatch(deleteTextStep(currentStep._id))
  }

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between'>
        <h3 className="editor-lesson-title mt-5 mb-3">{t('openQuest')}</h3>
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
          // height: 500,
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
        onEditorChange={(content) => setTextContent(content)}
      />
      <span className="info-title d-block">*{t('correct')}</span>
      <Button
        onClick={onUpdateStep}
        className="mt-3"
        type={'submit'}
        disabled={isLoading}>{isLoading ? t('saving') : t('save')}</Button>
    </div>
  )
}

export default TextTaskStepEditor
