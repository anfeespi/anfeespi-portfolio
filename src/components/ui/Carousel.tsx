import { useEffect, useRef, useState } from 'react'
import './carousel.scss'

interface CarouselProps {
  images: string[]
  alt: string
}

// Minimal replacement for ngx-owl-carousel-o with the same options the
// Angular app used: loop, autoplay, autoplayTimeout 3000, 1 item, mouse/touch drag.
export default function Carousel({ images, alt }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const stageOuterRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef(0)

  useEffect(() => {
    if (dragging) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length, dragging, current])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startXRef.current = e.clientX
    setDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    setDragOffset(e.clientX - startXRef.current)
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    const delta = e.clientX - startXRef.current
    const width = stageOuterRef.current?.offsetWidth ?? 1
    setDragging(false)
    setDragOffset(0)
    if (Math.abs(delta) > Math.max(40, width * 0.15)) {
      setCurrent((c) => (delta < 0 ? (c + 1) % images.length : (c - 1 + images.length) % images.length))
    }
  }

  return (
    <div className="owl-carousel-o owl-theme">
      <div
        ref={stageOuterRef}
        className={`owl-stage-outer${dragging ? ' dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className="owl-stage"
          style={{
            transform: `translateX(calc(${-current * 100}% + ${dragOffset}px))`,
            transition: dragging ? 'none' : undefined
          }}
        >
          {images.map((img) => (
            <div className="owl-item" key={img}>
              <div className="img-container">
                <img className="img-feature-proyect rounded" src={img} alt={alt} draggable={false} />
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
