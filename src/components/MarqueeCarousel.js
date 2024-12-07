'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const MarqueeCarousel = ({ images }) => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    let animation

    const animateMarquee = () => {
      const scrollWidth = marquee.scrollWidth
      const scrollAmount = marquee.scrollLeft
      marquee.scrollLeft += 1

      if (scrollAmount >= scrollWidth / 2) {
        marquee.scrollLeft = 0
      }

      animation = requestAnimationFrame(animateMarquee)
    }

    animation = requestAnimationFrame(animateMarquee)

    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Gradient */}
      <div className="absolute z-10 left-0 bg-gradient-to-r from-white w-1/4 h-full dark:from-white"></div>

      {/* Marquee Container */}
      <div
        className="flex items-center w-full marquee-container"
        ref={marqueeRef}
        style={{
          animationPlayState: 'running',
          display: 'flex',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Images */}
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className="w-80 h-56 mx-3 rounded-xl md:h-60"
            style={{ flexShrink: 0 }}
          >
            <Image
              src={src}
              alt={`image_${index}`}
              width={320}
              height={240}
              className="w-full h-full object-cover rounded-xl bg-slate-200 dark:bg-slate-700"
            />
          </div>
        ))}
      </div>

      {/* Right Gradient */}
      <div className="absolute z-10 top-0 right-0 bg-gradient-to-l from-white w-1/4 h-full dark:from-white"></div>
    </div>
  )
}

export default MarqueeCarousel
