import React, { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { getIsLoading } from '../../../store/lessonSteps/selectors'
import { updateTextLesson } from '../../../store/lessonSteps/thunks'

const TextStepEditor = ({ stepData }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const [textContent, setTextContent] = useState('')
  useEffect(() => {
    setTextContent(stepData.body)
  }, [])

  const onUpdateLesson = () => {
    dispatch(updateTextLesson(stepData._id, { body: textContent }))
  }

  return (
    <div>
      <h3 className="editor-lesson-title mt-5 mb-3">Write your material in the area below</h3>
      <Editor
        apiKey={'j2rcg8qaqco0x9y81b1jn5dc0ze3phyfbapmnra5q59deqml'}
        value={textContent}
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
      <Button
        className="mt-3"
        onClick={onUpdateLesson}
        type={'submit'}
        disabled={isLoading}>{isLoading ? 'Saving...' : 'Save'}</Button>
    </div>
  )
}

export default TextStepEditor
