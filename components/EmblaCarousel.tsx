import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import 'css/base.css'
import 'css/embla.css'

import Autoplay from 'embla-carousel-autoplay'
import CarouselImage from './CarouselImage'
import Link from 'next/link'
import { Post } from 'lib/sanity.queries'

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
          {posts.map((slide:Post, index) => (
            <div className="embla__slide max-w-[1000px]" key={index}>
              
              <div className="embla__parallax">

                <div
                  className="embla__parallax__layer "
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`,
                    }),
                  }}
                >
                    <div className=" embla__parallax__img   ">
                      <CarouselImage
                        slug={slide.slug}
                        title={slide.title}
                        image={slide.coverImage}
                        priority
                        />

                        </div>

                    <div className="transition-all Carousel_Container hover:bg-black/60 bg-gradient-to-t inset-0 from-black via-black/50 to-transparent backdrop-blur-12 w-full z-0  absolute bottom-0 text-white ">
                      <div className=' w-full h-full relative '>
                     <div className='w-full absolute mb-2 Carousel_Label min-h-[50%] transition-all p-6 md:p-12'>
                      <Link href={`authors/${slide.author?.name}`} className="md:mb-1 text-[6px] md:text-xs text-white/70 text-opacity-80">{slide.author?.name} • <time>16 Nov 2024</time></Link>
                      <Link
                        href={`/posts/${slide.slug}`}
                        className='grid grid-cols-1 gap-6  transition-all '
                        >
                          <h1
                        className="text-sm md:text-3xl font-bold hover:underline "
                        
                      >
                        {slide.title}
                        </h1>
                        <p className='md:block hidden'>{slide.excerpt}</p>
                        {/* <p className='md:block hidden italic'>By {slide.author?.name}</p> */}
                      </Link>
                      </div>
                      </div>

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
