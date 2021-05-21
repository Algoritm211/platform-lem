import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import CourseNavbar from '../Navbars/CourseNavbar'

const EditorPage = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3 col-md-2">
            <CourseNavbar/>
          </div>
          <div className="col-sm-9 col-md-10">
            <h1 className="editor-title mb-5">Description of the course</h1>
            <div className="row">
              <div className="col-3">
                <img src="https://apexcyprus.ru/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" className="editor-preview-image" alt="editor-preview-image"/>
              </div>
              <div className="col-9">
                <h3 className="editor-lesson-title mb-3">Course title</h3>
                <input className={'editor-input d-block my-auto'}
                  // value={title}
                  // onChange={(event) => setTitle(event.target.value)}
                       type="text"
                       placeholder="Course title"
                       name="title"
                       id="title"/>
              </div>
            </div>
            <h3 className="editor-lesson-title mt-5 mb-3">Course short description</h3>
            <textarea
              // value={formik.values.description}
              // onChange={formik.handleChange}
              className="form-control inputAcc"
              style={{ minHeight: '80px' }}
              placeholder="Tell us about the course"
              id="description"/>

            <h3 className="editor-lesson-title mt-5 mb-3">Course description</h3>
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


          <div className="container">

          </div>
        </div>
      </div>
    </div>
  )
}


export default EditorPage
