import * as React from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import 'css/menubar.css'



gsap.registerPlugin(useGSAP)


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion"


export interface IAppProps {}

export default function HamburgerMenu(props: IAppProps) {
  const [isOpen, setisOpen] = React.useState(false)

  const container = useRef(null)
  const { contextSafe } = useGSAP({ scope: container })
  const menuOpenRef = useRef(null)
  const menuCloseRef = useRef(null)
  const menuBarRef = useRef(null)
  const menuOverlayRef = useRef(null)

  useGSAP(
    (context, contextSafe) => {
      const handleMenuOpen = contextSafe(() => {
        gsap.to(menuBarRef.current, { right: 0 })
        gsap.to(menuOverlayRef.current, { opacity: 1, visibility: 'visible' })
      })
      const handleMenuClose = contextSafe(() => {
        gsap.to(menuBarRef.current, { right: -1000 })
        gsap.to(menuOverlayRef.current, {
          opacity: 0,
          visibility: 'hidden',
          delay: 0.2,
        })
      })

      menuOpenRef.current.addEventListener('click', handleMenuOpen)
      menuCloseRef.current.addEventListener('click', handleMenuClose)

      return () => {
        menuOpenRef.current.removeEventListener('click', handleMenuOpen)
        menuCloseRef.current.removeEventListener('click', handleMenuClose)
      }
    },
    { scope: container },
  )

  return (
    <div ref={container} className="overflow-x-hidden">
      <Menu ref={menuOpenRef} className="cursor-pointer" size={30} />
      <div
        className={` invisible bg-black/50 w-full h-full z-40 absolute top-0 left-0 overflow-hidden`}
        ref={menuOverlayRef}
      >
        <div
          ref={menuBarRef}
          className={`menu p-12 absolute overflow-x-hidden flex flex-col justify-center top-0 w-full -right-[1000px] h-[100vh] bg-blue-700 z-50 md:w-[60%]
            `}
        >
          <ul className="text-white font-bold text-5xl grid gap-8  ">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li className=" ">
              <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className='font-bold text-5xl '>
                    <div className='flex gap-2  items-center'>
                    Topics
                    <ChevronDown color="white" />
                    </div>
                    </AccordionTrigger>
                    <AccordionContent  className=' ml-8 flex flex-col gap-4 text-2xl drop-shadow-lg'>
                      <li>Astronomy</li>
                      <li>Physics</li>
                      <li>Biology</li>
                      <li>Chemistry</li>
                      <li>Mathematics</li>
                      <li>Psychology</li>

                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

            </li>
            <li>
              <Link href={'/editions'}>Editions</Link>
            </li>

            <li>
              <Link href={'/team'}>Team</Link>
            </li>

            <li>
              <Link href={'/about'} className=''>About</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
          <button className='absolute right-12 top-12' ref={menuCloseRef}><X color='white' size={40} /></button>
        </div>
      </div>
    </div>
  )
}
