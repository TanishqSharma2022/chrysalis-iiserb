import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from './EditionEmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import 'css/embla.css'
import 'css/base.css'


export function EditionCarousel({coverImage}) {
  const [emblaRef] = useEmblaCarousel()
  const OPTIONS: EmblaOptionsType = { dragFree: false, loop: true}
  return (
    <section className="md:p-[1.6rem] w-full ">
      <EmblaCarousel coverImage={coverImage} options={OPTIONS} />
    </section>
  )
}
