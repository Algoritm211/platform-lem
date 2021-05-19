import React from 'react'

const ProfileNavbar = () => {
  return (
    <div>
      <button className="profile-create-course d-flex mb-5">
        <h3 className="profile-create-course-text">Create new course</h3>
        <i className="fas fa-plus-circle profile-create-course-illustration"/>
      </button>
      <div className="profile-button d-flex mb-4">
        <i className="fab fa-flipboard profile-button-illustration"/>
        <p className="profile-button-text">My Courses</p>
      </div>
      <div className="profile-button d-flex mb-4">
        <i className="fab fa-elementor profile-button-illustration"/>
        <p className="profile-button-text">Editor</p>
      </div>
      <div className="profile-button d-flex mb-4">
        <i className="fas fa-cog profile-button-illustration"/>
        <p className="profile-button-text">Settings</p>
      </div>
      <div className="profile-upgrade-block mt-5">
        <img className="profile-upgrade-img" src="/6.png" alt="upgrade"/>
        <p className="profile-upgrade-text">Upgrade to PRO version to get more features</p>
        <button className="profile-upgrade-button">Upgrade</button>
      </div>
    </div>
  )
}

export default ProfileNavbar
