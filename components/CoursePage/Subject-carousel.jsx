import React from 'react'
import Slider from 'react-slick'
import withPageSize from '../HOC/withPageSize'

function SampleNextArrow(props) {
  const { style, onClick } = props
  return (
    <div
      // className={className}
      className="carousel-block-arrows carousel-arrows-right"
      style={{ ...style }}
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
      className="carousel-block-arrows carousel-arrows-left"
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-circle-left carousel-arrows"/>
    </div>
  )
}


const Carousel = ({ size }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: size[0] < 512 ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
  }

  return (
    <div>
      <Slider {...settings}>
        <div className="container">
          <div className="carousel-card my-3" style={{ backgroundColor: '#B2CCFC' }}>
            <h3 className="carousel-title" style={{ color: '#466aa8' }}>Math</h3>
            <p className="carousel-subtitle" style={{ color: '#466aa8' }}>12 courses</p>
          </div>
        </div>
        <div className="container">
          <div className="carousel-card my-3" style={{ backgroundColor: '#8cdac8' }}>
            <h3 className="carousel-title" style={{ color: '#408971' }}>IT</h3>
            <p className="carousel-subtitle" style={{ color: '#408971' }}>18 courses</p>
          </div>
        </div>
        <div className="container">
          <div className="carousel-card my-3" style={{ backgroundColor: '#f0c4d7' }}>
            <h3 className="carousel-title" style={{ color: '#895169' }}>Chemistry</h3>
            <p className="carousel-subtitle" style={{ color: '#895169' }}>2 courses</p>
          </div>
        </div>
        <div className="container">
          <div className="carousel-card my-3" style={{ backgroundColor: '#B2CCFC' }}>
            <h3 className="carousel-title" style={{ color: '#466aa8' }}>Physics</h3>
            <p className="carousel-subtitle" style={{ color: '#466aa8' }}>3 courses</p>
          </div>
        </div>
        <div className="container">
          <div className="carousel-card my-3" style={{ backgroundColor: '#8cdac8' }}>
            <h3 className="carousel-title" style={{ color: '#408971' }}>Biology</h3>
            <p className="carousel-subtitle" style={{ color: '#408971' }}>4 courses</p>
          </div>
        </div>
        <div className="container">
          <div className="carousel-card my-3" style={{ backgroundColor: '#f0c4d7' }}>
            <h3 className="carousel-title" style={{ color: '#895169' }}>History</h3>
            <p className="carousel-subtitle" style={{ color: '#895169' }}>7 courses</p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default withPageSize(Carousel)
