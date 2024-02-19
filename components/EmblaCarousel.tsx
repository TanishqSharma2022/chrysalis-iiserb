import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import 'css/base.css'
import 'css/embla.css'

import Autoplay from 'embla-carousel-autoplay'
import CarouselImage from './CarouselImage'
import Link from 'next/link'

const TWEEN_FACTOR = 1.2
const TWEEN_FACTOR_BRIGHTNESS = 2.2

type PropType = {
  posts: any[]
  options?: EmblaOptionsType
}

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)


const EmblaCarousel: React.FC<PropType> = (props) => {
  const { posts, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({stopOnInteraction: false})])
  const [tweenValues, setTweenValues] = useState<any[]>([])
  const [brightnessFilter, setBrightnessFilter] = useState<any[]>([])

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR_BRIGHTNESS)
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return
    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])
  return (
    <div className="embla border">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {posts.map((slide, index) => (
            <div className="embla__slide border border-blue-500 w-[50%]" key={index}>
              
              <div className="embla__parallax">

                <div
                  className="embla__parallax__layer "
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`,
                    }),
                  }}
                >
                    <div className=" embla__parallax__img max-h-[60vh]  ">
                      <CarouselImage
                        slug={slide.slug}
                        title={slide.title}
                        image={slide.coverImage}
                        priority
                        />

                        </div>

                    <div className=" bg-black/60 backdrop-blur-12 w-full p-12 z-10  absolute bottom-[10%] text-white ">
                      <Link
                        href={`/posts/${slide.slug}`}
                        className='grid grid-cols-1 gap-6'
                        >
                          <h1
                        className="text-md md:text-3xl font-bold hover:underline md:leading-[10px]"
                        
                      >
                        {slide.title}
                        </h1>
                        By {slide.author.name}
                      </Link>
                    </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
