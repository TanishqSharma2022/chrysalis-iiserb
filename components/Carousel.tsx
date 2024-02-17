import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import '../css/embla.css'

export function Carousel({posts}) {
  const [emblaRef] = useEmblaCarousel()
  const OPTIONS: EmblaOptionsType = { dragFree: false, loop: true}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <section className="md:p-[1.6rem] ">
      <EmblaCarousel posts={posts} options={OPTIONS} />
    </section>
  )
}
