import React, { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import CourseNavbar from '../Navbars/CourseNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { Button } from 'react-bootstrap'
import { getCurrentCourse, getIsLoading } from '../../store/courses/selectors'
import { updateCourseInfo, updateCoursePreview } from '../../store/courses/thunks'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'
import { useTranslation } from 'next-i18next'

const CourseEditorPage = ({ course }) => {
  const { t } = useTranslation('description')
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const currentCourse = useSelector(getCurrentCourse)
  const [editorBody, setEditorBody] = useState('')
  const noPhotoCourse = '/no-course-image.jpeg'
  useEffect(() => {
    dispatch(setCurrentCourse(course))
    return () => {
      dispatch(clearCurrentCourse())
    }
  }, [])
  const formik = useFormik({
    initialValues: {
      title: course.title,
      description: course.description,
    },
    onSubmit: (values) => {
      values['about'] = editorBody
      values['id'] = course._id
      dispatch(updateCourseInfo(values))
    },
  })

  const handleEditorChange = (content) => {
    setEditorBody(content)
  }

  const onHandleImage = (event) => {
    const formData = new FormData()
    formData.append('id', course._id)
    formData.append('photo', event.target.files[0])
    dispatch(updateCoursePreview(formData))
  }

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3 col-md-2">
            <CourseNavbar/>
          </div>
          <form className="col-sm-9 col-md-10" onSubmit={formik.handleSubmit}>
            <h1 className="editor-title mb-5">{t('title')}</h1>
            <div className="row">
              <label className="col-3">
                <input
                  type={'file'}
                  id={'coursePreview'}
                  name={'coursePreview'} onChange={onHandleImage}
                  multiple={false}
                  hidden={true} accept="image/jpeg,image/png"/>
                <img src={currentCourse?.coursePreview?.url || noPhotoCourse} className="editor-preview-image" alt="editor-preview-image"/>
              </label>
              <div className="col-9">
                <h3 className="editor-lesson-title mb-3">{t('courseTitle')}</h3>
                <input
                  className={'editor-input d-block my-auto'}
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Lesson title"
                  name="title"
                  id="title"/>
              </div>
            </div>
            <h3 className="editor-lesson-title mt-5 mb-3">{t('shortDesc')}</h3>
            <textarea
              value={formik.values.description}
              onChange={formik.handleChange}
              className="form-control inputAcc"
              style={{ minHeight: '80px' }}
              placeholder="Tell us about the course"
              id="description"/>

            <h3 className="editor-lesson-title mt-5 mb-3">{t('Desc')}</h3>
            <Editor
              // apiKey={'tiny-react_19541007271621779183675'}
              initialValue={course.about || ''}
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
              onEditorChange={handleEditorChange}
            />
            <Button className="mt-3" type={'submit'} disabled={isLoading}>{isLoading ? t('saving') : t('save')}</Button>
          </form>


          <div className="container">

          </div>
        </div>
      </div>
    </div>
  )
}


export default CourseEditorPage
