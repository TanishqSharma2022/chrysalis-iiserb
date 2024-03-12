
import TeamCard from 'components/TeamCard'
import React from 'react'
import members from '../data/member.js';
import PageLayout from 'components/PageLayout'
import { Separator } from 'components/ui/separator'




const team = () => {
  const magazine = members.filter(member => member.Team === 'Magazine')
  const scicomm = members.filter(member => member.Team === 'Sci-Comm')
  const coordinators = members.filter(member => member.Roles === 'Coordinator')
  const chiefeditors = members.filter(member => member.Roles === 'Chief-Editor')

// Sorting all by alphabetical order
  const field = "Name";
  magazine.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()))
  scicomm.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()))
  coordinators.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()))
  chiefeditors.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()))


  return (
    <>
    <PageLayout>
  <div className='overflow-x-hidden'>


<img src="https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/10/digital-illustration-teamwork.png" 
    className='  opacity-[0.1] top-12 -left-24  fixed z-[0]' />
    <div className='min-h-screen font-sfheavy w-full grid items-center z-[10] justify-center p-24'>
    <h1 className='font-bold text-center text-5xl md:text-8xl z-[10]'>Our Team</h1>

    <div className='text-5xl  mt-12 mx-auto p-4 z-[10]' >
      <h1 className='font-bold text-center text-5xl text-transparent bg-gradient-to-l from-violet-800 to-sky-500 bg-clip-text'>Coordinators</h1>
      <Separator className='w-[70%] h-[2px] bg-gradient-to-l from-violet-800 to-sky-500' />
      </div>
        <div className='grid md:grid-cols-2  justify-center z-[10]  '>
          {coordinators.map((member, index) => (
              <TeamCard key={index} memberInfo={member} />
          )
          )}

      </div>
      <div className='text-5xl  mt-12 mx-auto p-4  bg-gradient-to-tr bg-clip-text from-blue-800 to-sky-500 text-transparent w-fit rounded-xl'>
      <h1 className='font-bold text-center z-[10]'>Chief-Editors</h1>
      <Separator className='w-[70%] h-[2px] bg-blue-500' />
      </div>
   <div className='grid md:grid-cols-2 z-[10]'>
          {chiefeditors.map((member, index) => (
              <TeamCard key={index} memberInfo={member} />
          )
          )}

      </div>
      <h1 className='font-bold text-center text-4xl  mt-12 z-[10] bg-gradient-to-l w-fit mx-auto p-4 rounded-xl from-indigo-800 to-sky-500 text-white'>Sci-Comm Team</h1>
        <div className='grid md:grid-cols-3 gap-12 z-[10]'>
          {scicomm.sort().map((member, index) => (
            <TeamCard key={index} memberInfo={member} />
          )
          )}

      </div>
      <h1 className='font-bold text-center text-5xl w-fit mx-auto p-4 rounded-xl  mt-12 z-[10] bg-gradient-to-l from-teal-800 to-sky-500 text-white'>Magazine Team</h1>
        <div className='grid md:grid-cols-3 gap-8  z-[10]'>
          {magazine.map((member, index) => (
            <TeamCard key={index} memberInfo={member} />
          )
          )}

      </div>
    </div>
    </div>
    </PageLayout>
    </>
  )
}

export default team


