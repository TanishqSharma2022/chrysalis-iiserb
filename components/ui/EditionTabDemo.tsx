'use client'

import Image from 'next/image'
import { Tabs } from '../ui/EditionTabs'
import { urlForImage } from 'lib/sanity.image'
import { Separator } from './separator'
import Link from 'next/link'




export function TabsDemo({ editions }) {
  const tabs = editions.slice(0,3).map((edition, index) => {
    return {
      title: edition.title,
      value: index.toString(),
      description: edition.description,
      content: (
        <div className="w-full overflow-hidden   relative rounded-2xl p-6 text-xl  md:text-4xl  text-white ">
          <Image
            src={urlForImage(edition.coverImage?.asset._ref)
              .height(1000)
              .width(1000)
              ?.url()}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover h-full top-0 left-0 w-full absolute md:-bottom-48 brightness-[0.20]  z-[-1] rounded-2xl"
          />

          <p className="z-[0] font-sfbold  ">{edition.description}</p>

          <DummyContent
            coverImage={edition.coverImage}
            download={edition.pdf_download_url}
          />
        </div>
      ),
    }
  })

  tabs.push({
    title: 'More',
    value: 'more',
    onclick: () => {},
    content: (
      <div className="flex items-center justify-center bg-white h-full w-full">
          <Image
            src={'/images/1.jpg'}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover h-full top-0 left-0 w-full absolute md:-bottom-48 brightness-[0.20]  z-[-1] rounded-2xl"
          />
        <Link href="/editions">
          View All Editions
        </Link>
      </div>
    ),
  });

  return (
    <div className="h-[40rem] [perspective:1000px]  relative  flex flex-col md:max-w-5xl mx-auto w-full  items-start justify-start mt-4">
      <Tabs tabs={tabs} />
    </div>
  )
}

const DummyContent = ({ coverImage, download }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-2 place-items-center ">
      <Image
        src={urlForImage(coverImage?.asset._ref).height(900).width(600)?.url()}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover  w-[70%] md:w-[40%] lg:h-full lg:p-12  lg:ml-12 -mb-24    rounded-lg md:rounded-2xl"
      />
      <div className="p-6 flex flex-col items-start gap-4 md:mt-12">
        <p className="font-serif md:flex hidden italic md:text-xl lg:text-3xl text-start"> Chief Editors' Note</p>
        <Separator className='md:flex hidden' />
        <p className="text-xs lg:text-sm md:flex hidden font-sflight text-start mt-2">
          Dear Readers, Welcome to the latest edition of Chrysalis. As the
          Editors-in-Chief, we are delighted to present to you the culmination
          of months of hard work, dedication, and passion from our team as well
          as the contributors. Science communication holds a special place in
          our hearts. It's not just about disseminating facts and figures; it's
          about bridging the gap between the scientific community and the
          public. It's about breaking down complex concepts into digestible
          knowledge, fostering curiosity, and inspiring the next generation of
          scientists and innovators.
          <br />
          <br />
          Warm regards,
          <br />
          Bhavika & Shamika
          <br />
          Editors-in-Chief
        </p>
        <Link href={download} target="_blank">
          <button className=" px-8 py-2 mt-6 bg-blue-500 text-white text-sm rounded-md font-semibold hover:bg-blue-500/[0.8] hover:shadow-lg">
            Read Here.
          </button>
        </Link>
      </div>
    </div>
  )
}
