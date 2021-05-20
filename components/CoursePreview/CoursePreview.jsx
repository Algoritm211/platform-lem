import React from 'react'

const CoursePreview = () => {
  return (
    <div>
      <button className="mobile-course-preview-button">Get started</button>
      <div
        style={{ backgroundColor: '#3A5FA4', padding: '50px 0' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-6 m-auto py-3">
                  <h1 className="course-preview-name">Course Title</h1>
                  <p className="course-preview-text">This introductory course will give you a general understanding of the course title in general.</p>
                </div>
                <div className="col-12 col-md-6 mt-auto py-3">
                  <div className="course-preview-rating d-flex">
                    <i className="fas fa-heart"/>
                    <p className="course-preview-text">This course liked 28 people</p>
                  </div>
                  <div className="course-preview-rating d-flex">
                    <i className="fas fa-users"/>
                    <p className="course-preview-text">1488 pupils</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mt-5">
            <h3 className="course-preview-title my-3">About course</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.
              Sit amet luctus venenatis lectus magna fringilla urna porttitor. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Interdum varius sit amet mattis vulputate enim. Facilisis mauris sit
              amet massa. Integer eget aliquet nibh praesent tristique. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Viverra aliquet eget sit amet tellus cras adipiscing enim. Elit sed vulputate
              mi sit amet mauris commodo quis. Elementum pulvinar etiam non quam lacus suspendisse faucibus. In tellus integer feugiat scelerisque. Mattis enim ut tellus elementum sagittis vitae et leo duis.
              <br/> <br/>
              Vel pretium lectus quam id. Donec adipiscing tristique risus nec feugiat in fermentum. Vitae tortor condimentum lacinia quis vel eros donec. Adipiscing at in tellus integer feugiat. Potenti nullam
              ac tortor vitae purus faucibus ornare suspendisse sed. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Nulla aliquet enim tortor at auctor urna nunc. Et ligula ullamcorper malesuada
              proin libero nunc. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Purus sit amet luctus venenatis lectus magna fringilla. Faucibus in ornare quam viverra orci sagittis eu
              volutpat odio. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit.
            </p>
          </div>
          <div className="col-12 col-md-4 mt-5">
            <img className="my-3" style={{ width: '100%' }} src="https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836_1280.jpg" alt="course-preview-photo"/>
            <p className="course-preview-price my-3">Free</p>
            <button className="course-preview-button">Get started</button>
            <div className="course-preview-info-block my-5">
              <p className="course-preview-info-title">The course includes</p>
              <p className="course-preview-info-text">13 Lesson</p>
              <p className="course-preview-info-text">215 tests</p>
              <p className="course-preview-info-text">13 programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview
