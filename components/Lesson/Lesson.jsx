import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Link from 'next/link'

const Lesson = () => {
  return (
    <div>
      <div className="container course-page mt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8">
            <h1>Lesson title</h1>
            <p className="courses-lecture mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus. Amet facilisis magna etiam
              tempor orci eu lobortis elementum. Consectetur a erat nam at lectus. Tempor id eu nisl nunc mi ipsum. Tortor at risus viverra adipiscing at in tellus integer feugiat. Malesuada fames ac turpis
              egestas maecenas pharetra. Sed lectus vestibulum mattis ullamcorper velit. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Ipsum dolor sit amet consectetur.
              Aliquet eget sit amet tellus cras adipiscing. Eget aliquet nibh praesent tristique magna sit amet purus. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Consectetur purus ut
              faucibus pulvinar elementum. Fermentum odio eu feugiat pretium nibh.<br />
              <br />
            </p>

            <h3 className="editor-lesson-title mt-5 mb-3">Type your answer down below</h3>
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
                toolbar: `undo redo | formatselect | bold italic backcolor | \
                          alignleft aligncenter alignright alignjustify | \
                          bullist numlist outdent indent | removeformat | help`,
              }}
              // onEditorChange={handleEditorChange}
            />
            <div className="mt-3"/>
            <div className="d-flex">
              <div className="d-flex justify-content-start mb-5">
                <button className="content-btn">
                  Next task
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 course-info">
            <h3 className="courses-subtitle">Lesson №1</h3>
            <h1 className="courses-title mb-5">Course title</h1>
            <p className="course-description mb-5">Author - Edward Kvashyn. Student of the KPI, web-developer and web-designer</p>
            <div className="d-flex justify-content-start mb-5">
              <Link href={`#`}>
                <a className="mr-1" style={{ textDecoration: 'none' }}>
                  <button className="lesson-btn d-flex" style={{ lineHeight: '16px' }}>
                    <i className="fas fa-pen mr-1"/>
                    Edit lesson
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lesson
