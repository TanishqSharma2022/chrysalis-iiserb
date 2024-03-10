import * as React from 'react'
import { ChevronDown, Home, Menu, X } from 'lucide-react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'


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
  // const { contextSafe } = useGSAP({ scope: container })
  const menuOpenRef = useRef(null)
  const menuBarRef = useRef(null)
  const menuOverlayRef = useRef(null)

  // useGSAP(
  //   (context, contextSafe) => {
  //     const handleMenuOpen = contextSafe(() => {
  //       gsap.to(menuBarRef.current, { right: 0 })
        
  //     })
  //     const handleMenuClose = contextSafe(() => {
  //       gsap.to(menuBarRef.current, { right: -1000 })
   
  //     })

  //     menuOpenRef.current.addEventListener('click', handleMenuOpen)
  //     // menuCloseRef.current.addEventListener('click', handleMenuClose)

  //     return () => {
  //       menuOpenRef.current.removeEventListener('click', handleMenuOpen)
  //       // menuCloseRef.current.removeEventListener('click', handleMenuClose)
  //     }
  //   },
  //   { scope: container },
  // )






  const path01Variants = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    closed: { d: 'M0 9.5L24 9.5' },
   }

   const path02Variants = {
    open: { d: 'M3.00006 21.0607L21 3.06064' },
    moving: { d: 'M0 14.5L24 14.5' },
    closed: { d: 'M0 14.5L15 14.5' },
   }
   const [isBOpen, setBOpen] = React.useState(false);
   const path01Controls = useAnimation();
   const path02Controls = useAnimation();
   const onClick = async () => {
    // change the internal state
    setBOpen(!isBOpen);
    setisOpen(!isOpen)
    // start animation
    if (!isBOpen) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
      gsap.to(menuOverlayRef.current, { opacity: 1, visibility: 'visible',});
      gsap.to(menuBarRef.current, { right: 0 , delay: 0.5})
      gsap.fromTo(
        menuBarRef.current.querySelectorAll('.list-items'),
        { delay: 0.5,opacity: 0, y: 150 },
        { delay: 0.5,opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: 'power4.inOut' }
      );

    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
       gsap.to(menuOverlayRef.current, {
        opacity: 0,
        visibility: 'hidden',
      });
      gsap.to(menuBarRef.current, {delay: 0.5,  right: -1000 })

    }
  };
  return (
    <div ref={container} className="overflow-x-hidden  transition-all z-10">
      <button className={` scale-x-[-1] mr-2 md:mr-12 z-50 cursor-pointer relative  md:size-[30px]  opacity-50 hover:opacity-100 transition-all`} onClick={onClick} ref={menuOpenRef}>
      <svg width='30' height='30' viewBox='0 0 24 24' color='red'>
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
          stroke={isBOpen ? '#ffffff' : '#000000'}
          strokeWidth={2}
        />
        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          stroke={isBOpen ? '#ffffff' : '#000000'}
          strokeWidth={2}
        />
      </svg>
    </button>
    
      <div
        className={` invisible bg-black/50 backdrop-blur-sm transition-all w-full  h-full z-10 absolute top-0 left-0 overflow-hidden`}
        ref={menuOverlayRef}
      >
        <div
          ref={menuBarRef}
          className={`menu p-12 absolute overflow-x-hidden flex flex-col justify-center top-0 w-full -right-[1000px] h-[100vh] bg-zinc-900 z-10 md:w-[60%]
            `}
        >

        <button className='absolute top-24 left-12' ><Home size={30} color='white' /></button>
          
          
          <ul className="text-white font-bold text-3xl font-sans grid gap-8 menu_list  ">
            
            <li className="hover:translate-x-6 transition-all  ">
              <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className='font-bold text-3xl '>
                    <div className='flex gap-2  items-center overflow-hidden'>
                    <p className="hover:underline list-items">Topics</p>

                    <ChevronDown color="white" />
                    </div>
                    </AccordionTrigger>
                    <AccordionContent  className=' ml-8  text-2xl drop-shadow-lg'>
                      <ul className='grid grid-cols-2  gap-4'>
                      <Link href={`/topic/astronomy`}><li className='cursor-pointer hover:translate-x-6 transition-all '>Astronomy</li></Link>
                      <Link href={`/topic/physics`}><li className='cursor-pointer hover:translate-x-6 transition-all '>Physics</li></Link>
                      <Link href={`/topic/biology`}><li className='cursor-pointer hover:translate-x-6 transition-all '>Biology</li></Link>
                      <Link href={`/topic/chemistry`}><li className='cursor-pointer hover:translate-x-6 transition-all '>Chemistry</li></Link>
                      <Link href={`/topic/mathematics`}><li className='cursor-pointer hover:translate-x-6 transition-all '>Mathematics</li></Link>
                      <Link href={`/topic/psychology`}><li className='cursor-pointer hover:translate-x-6 transition-all '>Psychology</li></Link>
                      <Link href={`/topic/general%20sciences`}><li className='cursor-pointer hover:translate-x-6 transition-all '>General Sciences</li></Link>
                      <Link href={`/topic/earth%20and%20environmental`}><li className='cursor-pointer hover:translate-x-6 transition-all '>Earth and Environment</li></Link>
                      <Link href={`/topic/economics`}><li className='cursor-pointer hover:translate-x-6 transition-all '>Economics</li></Link>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

            </li>
            <li className='hover:translate-x-6 hover:underline transition-all overflow-hidden'>
              <Link href={'/editions'}>
                <p className="list-items">Editions</p>
              </Link>
            </li>

            <li>
              <Link href={'/team'}>
                <p className="list-items">Team</p>
              </Link>
            </li>

            <li>
              <Link href={'/about'} className=''>
              <p className="list-items">About</p>

              </Link>
            </li>
            <li>
              <Link href={'/contact'}>
              <p className="list-items">Contact</p>

              </Link>
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  )
}
