import React from 'react'
import { useSelector } from 'react-redux'
import { getIsAuth, getIsLoading } from '../../store/auth/selectors'
import ForbiddenPage from '../../pages/403'

const withAuthRequired = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const isLoading = useSelector(getIsLoading)
    const isAuth = useSelector(getIsAuth)
    if (isLoading) {
      return <div>LOADING.....</div>
    }

    if (!isAuth) {
      return <ForbiddenPage/>
    }
    return (
      <Component {...props} />
    )
  }
}

export default withAuthRequired
