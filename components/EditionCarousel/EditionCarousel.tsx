import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import  EditionEmblaCarousel from './EditionEmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'



export function EditionCarousel({coverImage}) {
  const [emblaRef] = useEmblaCarousel()
  const OPTIONS: EmblaOptionsType = { dragFree: false, loop: true, slidesToScroll: 1}
  return (
    <section className="md:p-[1.6rem]">
      <EditionEmblaCarousel coverImage={coverImage} options={OPTIONS} />
    </section>
  )
}
