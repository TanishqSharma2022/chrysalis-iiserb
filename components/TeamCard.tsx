import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const TeamCard = ({memberInfo}) => {
  
  return (
    <div className="flex flex-col justify-between mx-auto  mt-12 w-[250px]  relative   text-gray-900">
      <div className='w-full shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] relative h-[300px] overflow-y-hidden'>
        <img
          className="object-cover shadow-lg overflow-hidden aspect-[3/4] max-h-[300px] w-full h-full rounded-xl "
          src={memberInfo.Picture || "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt="Members"
        />
        <div className='absolute w-full h-[300px] p-4 rounded-xl top-[85%] hover:top-0 transition-all left-0 truncate hover:whitespace-normal bg-black/80'>
          <h1 className='font-sfregular   text-xs text-white  '>{memberInfo.Bio}</h1>
        </div>
        </div>
        <h1 className='mt-6 font-sfsemibold text-3xl'>{memberInfo.Name}</h1>
        <p className='font-sflight'>{memberInfo.Roles}</p>
    </div>
  )
}

export default TeamCard
