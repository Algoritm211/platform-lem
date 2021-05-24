import React from 'react'
import Header from '../components/Header/Header'
import ProfileMain from '../components/ProfileMain/ProfileMain'
import withAuthRequired from '../components/HOC/withAuthRequired'

const Profile = () => {
  return (
    <div>
      <Header />
      <ProfileMain />
    </div>
  )
}

export default withAuthRequired(Profile)
