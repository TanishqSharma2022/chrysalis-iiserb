import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EditionEmblaCarousel from './EditionEmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'components/ui/carousel'
import { urlForImage } from 'lib/sanity.image'

import Image from 'next/image'

export function EditionCarousel({ coverImage }) {

  return (
    <section className="md:px-12  ">
      <Carousel opts={{loop: true}} className='p-0'>
        <CarouselContent>
          {coverImage.map((image: any, index: number) => (
            <CarouselItem className="md:basis-1/3 flex flex-col justify-center" key={index}>
              <Image
                className="mx-auto drop-shadow-sm hover:drop-shadow-lg  "
                width={200}
                height={100}
                alt=""
                src={urlForImage(image.coverImage?.asset._ref)
                  .height(800)
                  .width(600)
                  ?.url()}
              />
              <h1 className="font-bold text-xl mt-4">{image.title}</h1>
              <p className="font-semibold text-md mt-4">{image.description}</p>
              <a target='_blank' href={image.pdf_download_url} className='cursor-pointer mt-4 hover:underline'>See it here.</a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='md:ml-0 ml-12' />
        <CarouselNext className='md:mr-0 mr-12' />
      </Carousel>
    </section>
  )
}
