import React from 'react'
import Slider from 'react-slick'
import ThemeCard from '../CourseCard/ThemeCard'
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
        <div className="container"><ThemeCard/></div>
        <div className="container"><ThemeCard/></div>
        <div className="container"><ThemeCard/></div>
        <div className="container"><ThemeCard/></div>
        <div className="container"><ThemeCard/></div>
      </Slider>
    </div>
  )
}

export default withPageSize(Carousel)
