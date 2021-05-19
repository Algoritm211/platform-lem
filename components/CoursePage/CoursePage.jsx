import React, { useEffect } from 'react'
import CourseCard from '../CourseCard/CourseCard'
import Carousel from './Subject-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllCourses } from '../../store/courses-reducer/courses-thunks'
import { getAllCourses } from '../../store/courses-reducer/courses-selector'
import Slider from 'react-slick'
import ThemeCard from '../CourseCard/ThemeCard'

const CoursePage = () => {
  const dispatch = useDispatch()
  const courses = useSelector(getAllCourses)
  useEffect(() => {
    dispatch(loadAllCourses(1, ''))
  }, [])
  // console.log(courses)

  const coursesBlock = courses.map((course, index) => {
    const countBlock = index % 3 === 0 ? 8 : 4
    return (
      <div className={`col-12 col-md-${countBlock}`} key={course._id}>
        <CourseCard course={course}/>
      </div>
    )
  })
  return (
    <div>
      <div className="container my-3">
        <div style={{ backgroundColor: '#f0c4d7', borderRadius: '8px' }}>
          <div className="row">
            <div className="col-12 col-md-8 m-auto">
              <img className="content-image" src="/3.png" alt="photo"/>
            </div>
            <div className="col-12 col-md-4 p-5 m-auto">
              <h3 className="content-title mb-2">Find your course</h3>
              <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor</p>
            </div>
          </div>
          <div className="container" style={{ paddingBottom: '15px' }}>
            <section className="search-form">
              <form action="" method="GET" name="search" role="search" className="border-form">
                <p className="inp-wrap cat-wrap" style={{ borderRight: '1px solid rgba(51,51,51,0.3)' }}>
                  <select name="search categories" id="categories" className="search-input">
                    <option value="category" defaultValue>Category</option>
                    <option value="newyork">Math</option>
                    <option value="chicago">Science</option>
                    <option value="losangeles">IT</option>
                    <option value="seattle">Geography</option>
                    <option value="dallas">Art</option>
                    <option value="boston">English</option>
                    <option value="sanfran">History</option>
                  </select>
                  <i className="fas fa-caret-down"/>
                </p>
                <p className="inp-wrap search-wrap">
                  <input type="search" name="search-term" id="search-field" className="search-input" placeholder="e.g. math, chemistry"/></p>
                <p className="inp-wrap submit-wrap">
                  <button className="search-btn">
                    <i className="fas fa-search grid-100"/>
                  </button>
                </p>
              </form>
            </section>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="category-picker py-3">Popular courses</h2>
        <div className="row">
          {coursesBlock}
          {/* <div className="col-12 col-md-8">*/}
          {/*  <CourseCard />*/}
          {/* </div>*/}
          {/* <div className="col-12 col-md-4">*/}
          {/*  <CourseCard />*/}
          {/* </div>*/}
          {/* <div className="col-12 col-md-5">*/}
          {/*  <CourseCard />*/}
          {/* </div>*/}
          {/* <div className="col-12 col-md-7">*/}
          {/*  <CourseCard />*/}
          {/* </div>*/}
          {/* <div className="col-12 col-md-12">*/}
          {/*  <CourseCard />*/}
          {/* </div>*/}
        </div>
      </div>
      <div className="container my-5">
        <h2 className="category-picker py-3">Subjects</h2>
        <Carousel/>
      </div>
      <div className="container my-5">
        <h2 className="category-picker py-3">Popular themes</h2>
        <div className="row">
          <div className="col-6 col-md-4">
            <ThemeCard/>
          </div>
          <div className="col-6 col-md-4">
            <ThemeCard/>
          </div>
          <div className="col-6 col-md-4">
            <ThemeCard/>
          </div>
          <div className="col-6 col-md-3">
            <ThemeCard/>
          </div>
          <div className="col-6 col-md-3">
            <ThemeCard/>
          </div>
          <div className="col-6 col-md-3">
            <ThemeCard/>
          </div>
          <div className="col-6 col-md-3">
            <ThemeCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage
