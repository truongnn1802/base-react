import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css'

import './carousel.scss'

const Carousel = ({ children, settingCustom }) => {
  const [currentChangeSlide, setCurrentChangeSlide] = useState(null)
  const ref = useRef({})
  const maxTimesNext = useRef(0)

  useEffect(() => {
    const { children, slidesToShow } = ref.current.props
    const totalChildren = children?.length ? children.length : 0
    maxTimesNext.current = Math.floor(totalChildren / slidesToShow)
    setCurrentChangeSlide(0)
  }, [])

  const next = () => {
    ref.current.slickNext()
  }

  const previous = () => {
    ref.current.slickPrev()
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    ...settingCustom
  }
  return (
    <div className='relative px-[40px]'>
      <Slider ref={ref} {...settings} afterChange={(e) => setCurrentChangeSlide(e)}>
        {children}
      </Slider>
      <button
        onClick={previous}
        className={`btn-arrow prev + ${currentChangeSlide === 0 ? 'cursor-not-allowed opacity-5' : ''}`}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        onClick={next}
        className={`btn-arrow next + ${
          currentChangeSlide === maxTimesNext.current ? 'cursor-not-allowed opacity-5' : ''
        }`}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  )
}

export default Carousel
