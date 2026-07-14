import { useEffect, useState } from 'react'
import './carousel.scss'

interface CarouselProps {
  images: string[]
  alt: string
}

// Minimal replacement for ngx-owl-carousel-o with the same options the
// Angular app used: loop, autoplay, autoplayTimeout 3000, 1 item.
export default function Carousel({ images, alt }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="owl-carousel-o owl-theme">
      <div className="owl-stage-outer">
        <div className="owl-stage" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((img) => (
            <div className="owl-item" key={img}>
              <div className="img-container">
                <img className="img-feature-proyect rounded" src={img} alt={alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="owl-dots">
        {images.map((img, i) => (
          <button
            type="button"
            key={img}
            className={`owl-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          >
            <span></span>
          </button>
        ))}
      </div>
    </div>
  )
}
