import React from 'react'
import { useSelector } from 'react-redux'
import { getIsAuth } from '../../store/auth/selectors'
import ForbiddenPage from '../../pages/403'

const withAuthRequired = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const isAuth = useSelector(getIsAuth)
    if (!isAuth) {
      return <ForbiddenPage />
    }
    return (
      <Component {...props} />
    )
  }
}

export default withAuthRequired
