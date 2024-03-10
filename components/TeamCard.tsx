import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const TeamCard = ({memberInfo}) => {
  
  return (
    <div className="flex flex-col justify-between max-w-2xl min-w-[350px] md:min-w-[400px] mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 relative overflow-hidden bg-zinc-700 w-full">
        <div className='absolute h-full w-full bg-gradient-to-r  from-blue-500 to-green-300 blur-[70px]'></div>
        {/* <img
          className="object-cover object-top w-full -z-1"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        /> */}
      </div>
      <div className=" mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="scale-[120%]  object-cover"
          src={memberInfo.Picture || "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt="Members"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{memberInfo.Name}</h2>
        <p className="text-gray-500 italic font-serif">{memberInfo.Roles} Team</p>
      </div>
      <div className="p-4 mt-2 text-gray-500 flex text-center text-xs  items-center justify-around">
          {memberInfo.Bio} 
      </div>
      <div className="p-4 border-t bottom-0 mt-2">
       <ul className='w-full flex flex-row gap-8 items-center justify-center'>
        <a href={memberInfo.Username}><li>
          <BiLogoGmail size={25} />
        </li>
        </a>
        <a href={memberInfo.LinkedIn}><li>
        <FaLinkedin size={25} />
        </li>
        </a>
        <a href={memberInfo.Instagram}><li>
        <FaInstagram size={25} />
        </li>
        </a>
       </ul>
      </div>
    </div>
  )
}

export default TeamCard
