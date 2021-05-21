import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

const EditorPage = () => {
  return (
    <div>
      <div className="container">
        <div className="profile-welcome">
          <div className="row">
            <div className="col-12">
              <h3 className="editor-lesson-title mb-3">Settings of the course</h3>
            </div>
            <div className="col-1">
              <img src="https://bytes.ua/wp-content/uploads/2017/08/no-image.png" className="editor-preview-image" alt="editor-preview-image"/>
            </div>
            <div className="col-11">
              <input className={'editor-input d-block '}
                // value={title}
                // onChange={(event) => setTitle(event.target.value)}
                type="text"
                name="title"
                id="title"/>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <h3 className="editor-lesson-title mb-3">Settings of the course</h3>
        <Editor
          // apiKey={'j2rcg8qaqco0x9y81b1jn5dc0ze3phyfbapmnra5q59deqml'}
          // value={editorBody}
          // initialValue={!isHomework ? currentLesson?.body : currentLesson?.homeWork || ''}
          init={{
            // height: 500,
            width: '100%',
            min_height: 300,
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
    </div>
  )
}


export default EditorPage
