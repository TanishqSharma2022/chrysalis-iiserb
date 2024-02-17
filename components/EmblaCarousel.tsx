import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import '../css/base.css'
import '../css/embla.css'
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
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {posts.map((slide, index) => (
            <div className="embla__slide border " key={index}>
              
              <div className="embla__parallax">
                <div
                  className="embla__parallax__layer "
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`,
                      filter: `brightness(${brightnessFilter[index]})`
                    }),
                  }}
                >

                    <div className=" embla__parallax__img  ">
                      <CarouselImage
                        slug={slide.slug}
                        title={slide.title}
                        image={slide.coverImage}
                        priority
                      />

                    </div>
                    <div className=" w-full px-12 z-10  absolute bottom-[10%] text-white left-12">
                      <Link
                        href={`/posts/${slide.slug}`}
                        className="text-xl md:text-5xl font-bold hover:underline leading-[10px]"
                      >
                        {slide.title}
                      </Link>
                    </div>
                  <div
                    className="border  absolute top-0 left-0 z-10
                    before:content-['']
                    before:absolute
                    before:inset-0
                    before:left-0
                    before:block
                    before:bg-gradient-to-b
                    before:from-[#ffffff00]
                    before:from-10%
                    before:via-[#ffffff00]
                    before:via-30%
                    before:to-black
                    before:z-[5]
                  w-full

                    
                    "
                  >
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
