import React, { useState, useEffect } from "react"
import useInterval from "../utils/useInterval"
import Img from "gatsby-image"

const SlideShow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0)

  useInterval(() => {
    if (slideIndex == images.length - 1) {
      setSlideIndex(0)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }, 3000)

  return (
    <>
      {images.map((image, index) => (
        <Img
          className={slideIndex === index ? "w-100 db" : "w-100 dn"}
          key={image.name}
          fluid={image.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      ))}
    </>
  )
}

export default SlideShow
