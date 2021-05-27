import React from 'react'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../store/auth/selectors'
import { unsubscribeCourse } from '../../store/courses/thunks'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const ProfileCourseCard = ({ course }) => {
  const { t } = useTranslation('teaching')
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector(getUserData)
  return (
    <div className="profile-courses-one d-flex my-3">
      <img className="profile-courses-one-img" src={course.coursePreview?.url || course.coursePreview} alt="preview-course-photo"/>
      <div className="profile-courses-one-content">
        <h3 className="profile-courses-one-title">{course.title}</h3>
        <p className="profile-courses-one-text">{course.description}</p>
        <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>{course.lessons.length} {t('lessons')}</p>
      </div>
      <Dropdown as={ButtonGroup} className="ml-auto my-auto">
        <Button
          className="course-view-btn d-flex"
          variant="primary" onClick={() => router.push(`/programs/${course._id}`)}>{t('view')}</Button>

        <Dropdown.Toggle className="course-view-btn" split variant="primary" id="dropdown-split-basic"/>

        <Dropdown.Menu>
          {user?._id === course.author._id && (
            <Link href={`/editor/${course._id}`}>
              <Dropdown.Item href={`/editor/${course._id}`}>{t('change')}</Dropdown.Item>
            </Link>
          )}
          <Dropdown.Item onClick={() => dispatch(unsubscribeCourse(course._id))}>{t('delete')}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default ProfileCourseCard
