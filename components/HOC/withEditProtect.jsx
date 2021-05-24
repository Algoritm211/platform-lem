import React from 'react'
import { useSelector } from 'react-redux'
import { getUserData } from '../../store/auth/selectors'
import ForbiddenPage from '../../pages/403'
import withAuthRequired from './withAuthRequired'
import { getCurrentCourse } from '../../store/courses/selectors'

const withEditProtect = (Component) => {
  // eslint-disable-next-line react/display-name
  return withAuthRequired((props) => {
    const currentCourse = useSelector(getCurrentCourse)
    const user = useSelector(getUserData)
    if (!user) {
      return <ForbiddenPage/>
    }
    if (currentCourse && !user.coursesAuthor.includes(currentCourse._id)) {
      return <ForbiddenPage/>
    }
    return (
      <Component {...props} />
    )
  })
}

export default withEditProtect
