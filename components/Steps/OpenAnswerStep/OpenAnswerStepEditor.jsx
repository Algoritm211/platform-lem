import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useSelector } from 'react-redux'
import { getIsLoading } from '../../../store/courses/selectors'
import { Button } from 'react-bootstrap'

const OpenAnswerStepEditor = () => {
  const isLoading = useSelector(getIsLoading)
  return (
    <div>
      <h3 className="editor-lesson-title mt-5 mb-3">Write your question in the area below</h3>
      <Editor
        // apiKey={'j2rcg8qaqco0x9y81b1jn5dc0ze3phyfbapmnra5q59deqml'}
        // value={editorBody}
        // initialValue={!isHomework ? currentLesson?.body : currentLesson?.homeWork || ''}
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
        // onEditorChange={handleEditorChange}
      />
      <span className="info-title d-block">*Any answer will be appreciated as correct.</span>
      <Button className="mt-3" type={'submit'} disabled={isLoading}>{isLoading ? 'Saving...' : 'Save'}</Button>
    </div>
  )
}

export default OpenAnswerStepEditor
