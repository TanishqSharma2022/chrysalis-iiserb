import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'
import 'css/emblaedition.css'
import { Thumb } from './EmblaCarouselThumbsButton'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/ui/carousel"


type PropType = {
  coverImage: any
  options?: EmblaOptionsType
}

const EditionEmblaCarousel: React.FC<PropType> = (props) => {
  const { coverImage, options } = props
  // const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  // const [selectedIndex, setSelectedIndex] = useState(0)
  // const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
  //   containScroll: 'keepSnaps',
  //   dragFree: true
  // })

  // const onThumbClick = useCallback(
  //   (index: number) => {
  //     if (!emblaMainApi || !emblaThumbsApi) return
  //     emblaMainApi.scrollTo(index)
  //   },
  //   [emblaMainApi, emblaThumbsApi]
  // )

  // const onSelect = useCallback(() => {
  //   if (!emblaMainApi || !emblaThumbsApi) return
  //   setSelectedIndex(emblaMainApi.selectedScrollSnap())
  //   emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  // }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  // useEffect(() => {
  //   if (!emblaMainApi) return
  //   onSelect()
  //   emblaMainApi.on('select', onSelect)
  //   emblaMainApi.on('reInit', onSelect)
  // }, [emblaMainApi, onSelect])





  return (
    // <div className="embla border">
    //   <div className="embla__viewport  " ref={emblaMainRef}>
    //     <div className="embla__container ">
    //       {coverImage.map((image:any, index:number) => (
    //         <div className="border embla__slide grid grid-rows-2 md:grid-cols-2 place-items-center justify-around " key={index}>
    //           <Image
    //               className=" drop-shadow-xl  embla__slide__img"
    //               width={200}
    //               height={100}
    //               alt=""
    //               src={urlForImage(image.coverImage?.asset._ref).height(800).width(600)?.url()}
    //             />
    //           <div>
    //             <h1>About the Edition</h1>
    //             <p>All the blogs in it</p>
    //           </div>
    //         </div>
            
    //       ))}
    //     </div>
    //   </div>

    //   <div className="embla-thumbs">
    //     <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
    //       <div className="embla-thumbs__container">
    //         {coverImage.map((image, index) => (
    //           <Thumb
    //             onClick={() => onThumbClick(index)}
    //             selected={index === selectedIndex}
    //             index={index}
    //             imgSrc={image.coverImage?.asset._ref}
    //             key={index}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='border  border-black'>
{/* <Carousel>
  <CarouselContent >
         {coverImage.map((image:any, index:number) => (
                    <CarouselItem className='md:basis-1/3 flex flex-col justify-center border'>
                      <Image
                  className="mx-auto drop-shadow-xl border "
                  width={200}
                  height={100}
                  alt=""
                  src={urlForImage(image.coverImage?.asset._ref).height(800).width(600)?.url()}
                />
                <h1 className='font-bold text-xl mt-4'>{image.title}</h1>
                <p className='font-semibold text-md mt-4'>
                {image.description}
                </p>
                    </CarouselItem>
            ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
   */}
    </div>
  )

}


export default EditionEmblaCarousel
