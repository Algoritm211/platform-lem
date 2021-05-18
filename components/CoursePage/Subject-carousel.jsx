import React, { Component } from 'react'
import Slider from 'react-slick'

function SampleNextArrow(props) {
  const { style, onClick } = props
  return (
    <div
      // className={className}
      className="carousel-block-arrows"
      style={{ ...style, right: '-25px' }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-circle-right carousel-arrows"/>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { style, onClick } = props
  return (
    <div
      className="carousel-block-arrows"
      style={{ ...style, left: '-25px' }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-circle-left carousel-arrows"/>
    </div>
  )
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
    }
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div className="container">
            <div className="carousel-card" style={{ backgroundColor: '#B2CCFC' }}>
              <h3 className="carousel-title" style={{ color: '#466aa8' }}>Math</h3>
              <p className="carousel-subtitle" style={{ color: '#466aa8' }}>12 courses</p>
            </div>
          </div>
          <div className="container">
            <div className="carousel-card" style={{ backgroundColor: '#f0c4d7' }}>
              <h3 className="carousel-title" style={{ color: '#ce5c9b' }}>Chemistry</h3>
              <p className="carousel-subtitle" style={{ color: '#ce5c9b' }}>2 programs</p>
            </div>
          </div>
          <div className="container">
            <div className="carousel-card" style={{ backgroundColor: '#8cdac8' }}>
              <h3 className="carousel-title" style={{ color: '#387d65' }}>Physics</h3>
              <p className="carousel-subtitle" style={{ color: '#387d65' }}>8 programs</p>
            </div>
          </div>
          <div className="container">
            <div className="carousel-card" style={{ backgroundColor: '#B2CCFC' }}>
              <h3 className="carousel-title" style={{ color: '#466aa8' }}>IT</h3>
              <p className="carousel-subtitle" style={{ color: '#466aa8' }}>28 courses</p>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
