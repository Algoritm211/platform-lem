import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

const TextStepEditor = () => {
  return (
    <div>
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
    </div>
  )
}

export default TextStepEditor
