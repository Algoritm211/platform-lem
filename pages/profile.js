import React from 'react'
import Header from '../components/Header/Header'
import ProfileMain from '../components/ProfileMain/ProfileMain'
import { useSelector } from 'react-redux'
import { getIsAuth } from '../store/auth-reducer/auth-selector'

const Profile = () => {
  const isAuth = useSelector(getIsAuth)
  if (!isAuth) {
    return <div>Forbidden</div>
  }
  return (
    <div>
      <Header />
      <ProfileMain />
    </div>
  )
}

export default Profile
