import React from 'react'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap'

const ProfileCourseCard = ({ course }) => {
  return (
    <div className="profile-courses-one d-flex my-3">
      <img className="profile-courses-one-img" src={course.coursePreview} alt="preview-course-photo"/>
      <div className="profile-courses-one-content">
        <h3 className="profile-courses-one-title">{course.title}</h3>
        <p className="profile-courses-one-text">{course.description}</p>
        <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>{course.lessons.length} lessons</p>
      </div>
      <Dropdown as={ButtonGroup} className="ml-auto my-auto">
        <Button className="course-view-btn d-flex" variant="primary">View course</Button>

        <Dropdown.Toggle className="course-view-btn" split variant="primary" id="dropdown-split-basic"/>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Change</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Delete course</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default ProfileCourseCard
