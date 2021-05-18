import React from 'react'

const ProfileMain = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3 col-md-2">
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
          <div className="col-sm-9 col-md-10">
            <div className="profile-welcome d-flex">
              <div className="profile-welcome-block">
                <h3 className="profile-welcome-title">Welcome, Edward</h3>
                <p className="profile-welcome-subtitle">Are you ready to new day?</p>
              </div>
              <div className="col-6">
                <img className="profile-welcome-img" src="/7.png" alt="upgrade"/>
              </div>
            </div>
            <div className="profile-courses">
              <h3 className="profile-courses-title">My Courses</h3>
              <div className="profile-courses-one d-flex my-3">
                <img className="profile-courses-one-img" src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg" alt="preview-course-photo"/>
                <div className="profile-courses-one-content">
                  <h3 className="profile-courses-one-title">Course Title</h3>
                  <p className="profile-courses-one-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>12 lessons</p>
                </div>
              </div>
              <div className="profile-courses-one d-flex my-3">
                <img className="profile-courses-one-img" src="https://cdn.pixabay.com/photo/2021/05/12/12/33/greater-celandine-6248215_1280.jpg" alt="preview-course-photo"/>
                <div className="profile-courses-one-content">
                  <h3 className="profile-courses-one-title">Course Title</h3>
                  <p className="profile-courses-one-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>12 lessons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMain
