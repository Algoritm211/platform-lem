import React from 'react'
import CourseNavbar from '../Navbars/CourseNavbar'
import { Editor } from '@tinymce/tinymce-react'
import Link from 'next/link'

const LessonPage = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3 col-md-2">
            <CourseNavbar/>
          </div>
          <div className="col-sm-9 col-md-10">
            <h1 className="editor-title mb-5">Settings of the lesson</h1>
            <h3 className="editor-lesson-title mb-3">Course title</h3>
            <input className={'editor-input d-block my-auto'}
              // value={title}
              // onChange={(event) => setTitle(event.target.value)}
                   type="text"
                   placeholder="Course title"
                   name="title"
                   id="title"/>

            <div className="my-5">
              <h3 className="editor-lesson-title mb-3">Lesson plan</h3>
              <div className="d-flex">
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex" style={{ backgroundColor: '#63c76a' }}>
                      <i className="fas fa-film"/>
                    </button>
                  </a>
                </Link>
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex" style={{ backgroundColor: '#212529' }}>
                      <i className="fas fa-align-left"/>
                    </button>
                  </a>
                </Link>
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex" style={{ backgroundColor: '#212529' }}>
                      <i className="fas fa-pen"/>
                    </button>
                  </a>
                </Link>
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex" style={{ backgroundColor: '#212529' }}>
                      <i className="fas fa-question"/>
                    </button>
                  </a>
                </Link>
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex" style={{ backgroundColor: '#212529' }}>
                      <i className="fas fa-flask"/>
                    </button>
                  </a>
                </Link>
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex" style={{ backgroundColor: '#212529' }}>
                      <i className="far fa-comment-dots"/>
                    </button>
                  </a>
                </Link>
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex" style={{ backgroundColor: '#212529' }}>
                      <i className="far fa-check-square"/>
                    </button>
                  </a>
                </Link>
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex" style={{ backgroundColor: '#212529' }}>
                      <i className="fas fa-list-ol"/>
                    </button>
                  </a>
                </Link>
                <Link href={`#`}>
                  <a className="mr-1" style={{ textDecoration: 'none' }}>
                    <button className="lesson-btn d-flex">
                      <i className="fas fa-plus"/>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
            <h3 className="editor-lesson-title mt-5 mb-3">Step 1 | Task description</h3>
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
            <h3 className="editor-lesson-title mt-5 mb-3">Right answer on your question</h3>
            <input className={'editor-input d-block my-auto'}
              // value={title}
              // onChange={(event) => setTitle(event.target.value)}
                   type="answer"
                   placeholder="Right answer"
                   name="answer"
                   id="answer"/>
          </div>


          <div className="container">

          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonPage
