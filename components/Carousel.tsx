import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import 'css/embla.css'
import 'css/base.css'



export function Carousel({posts}) {
  const [emblaRef] = useEmblaCarousel()
  const OPTIONS: EmblaOptionsType = { dragFree: false, loop: true}
  return (
    <section className="border p-0 ">
      <EmblaCarousel posts={posts} options={OPTIONS} />
    </section>
  )
}
