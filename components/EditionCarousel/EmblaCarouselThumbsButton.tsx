import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import React from 'react'

type PropType = {
  selected: boolean
  imgSrc: string
  index: number
  onClick: () => void
}
import 'css/base.css'
import 'css/emblaedition.css'


export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <Image
                  className="embla-thumbs__slide__img"
                  width={100}
                  height={100}
                  alt=""
                  src={urlForImage(imgSrc).height(400).width(300)?.url()}

                />
      </button>
    </div>
  )
}
