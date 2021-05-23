import React from 'react'
import CourseNavbar from '../Navbars/CourseNavbar'
import Link from 'next/link'

const CourseManager = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3 col-md-2">
            <CourseNavbar/>
          </div>
          <div className="col-sm-9 col-md-10">
            <div className="col-12 сol-sm-6 profile-welcome" style={{ backgroundColor: 'rgb(240, 196, 215)' }}>
              <div className="profile-welcome-block">
                <h3 className="profile-welcome-title">Course title</h3>
                <p className="profile-welcome-subtitle">Here you can see your lessons, change them, delete and whatever you want!</p>
              </div>
              <div className="col-12 col-sm-6">
                <img className="profile-welcome-course-img" src="https://i.pinimg.com/originals/84/15/e1/8415e1af255424efc151ed1cb79147b1.jpg" alt="upgrade"/>
              </div>
            </div>
            <div className="profile-courses">
              <h3 className="profile-courses-title">Lessons(3)</h3>
              <div className="profile-courses-one d-flex my-3">
                <h3 className="profile-courses-one-lessonNumber">1.</h3>
                <div className="profile-courses-one-content">
                  <h3 className="profile-courses-one-title">Lesson Title</h3>
                  <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>9 tasks and exercises</p>
                </div>
                <div className="ml-auto">
                  <Link href={`/programs/`}>
                    <a style={{ textDecoration: 'none' }}>
                      <button className="lesson-btn d-flex">
                        <i className="fas fa-pen"/>
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="ml-1">
                  <Link href={`/programs/`}>
                    <a style={{ textDecoration: 'none' }}>
                      <button className="lesson-delete-btn d-flex">
                        <i className="fas fa-trash-alt"/>
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="profile-courses-one d-flex my-3">
                <h3 className="profile-courses-one-lessonNumber">2.</h3>
                <div className="profile-courses-one-content">
                  <h3 className="profile-courses-one-title">Lesson Title</h3>
                  {/* <p className="profile-courses-one-text">Lesson description</p>*/}
                  <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>9 tasks and exercises</p>
                </div>
                <div className="ml-auto">
                  <Link href={`/programs/`}>
                    <a style={{ textDecoration: 'none' }}>
                      <button className="lesson-btn d-flex">
                        <i className="fas fa-pen"/>
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="ml-1">
                  <Link href={`/programs/`}>
                    <a style={{ textDecoration: 'none' }}>
                      <button className="lesson-delete-btn d-flex">
                        <i className="fas fa-trash-alt"/>
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="profile-courses-one d-flex my-3">
                <h3 className="profile-courses-one-lessonNumber">3.</h3>
                <div className="profile-courses-one-content">
                  <h3 className="profile-courses-one-title">Lesson Title</h3>
                  {/* <p className="profile-courses-one-text">Lesson description</p>*/}
                  <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>9 tasks and exercises</p>
                </div>
                <div className="ml-auto">
                  <Link href={`/programs/`}>
                    <a style={{ textDecoration: 'none' }}>
                      <button className="lesson-btn d-flex">
                        <i className="fas fa-pen"/>
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="ml-1">
                  <Link href={`/programs/`}>
                    <a style={{ textDecoration: 'none' }}>
                      <button className="lesson-delete-btn d-flex">
                        <i className="fas fa-trash-alt"/>
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="profile-courses-one d-flex my-3">
                <div className="mr-3">
                  <Link href={`/programs/`}>
                    <a style={{ textDecoration: 'none' }}>
                      <button className="lesson-btn d-flex">
                        <i className="fas fa-plus"/>
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="profile-courses-one-content">
                  <h3 className="profile-courses-one-title">Let`s create another lesson</h3>
                  <Link href={`#`}>
                    <a style={{ textDecoration: 'none' }}>
                      <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>Click the button left</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseManager
