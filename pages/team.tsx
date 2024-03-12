
import TeamCard from 'components/TeamCard'
import React from 'react'
import members from '../data/member.js';
import PageLayout from 'components/PageLayout'




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


    <div className='min-h-screen w-full grid items-center justify-center'>
    <h1 className='font-bold text-center text-3xl md:text-6xl'>Our Team</h1>

    <h1 className='font-bold text-center text-xl md:text-3xl mt-12'>Coordinators</h1>
        <div className='grid md:grid-cols-2  '>
          {coordinators.map((member, index) => (
              <TeamCard key={index} memberInfo={member} />
          )
          )}

      </div>
      <h1 className='font-bold text-center text-xl md:text-3xl mt-12'>Chief-Editors</h1>
        <div className='grid md:grid-cols-2 '>
          {chiefeditors.map((member, index) => (
              <TeamCard key={index} memberInfo={member} />
          )
          )}

      </div>
      <h1 className='font-bold text-center text-3xl mt-12'>Sci-Comm Team</h1>
        <div className='grid md:grid-cols-3 gap-12 '>
          {scicomm.sort().map((member, index) => (
            <TeamCard key={index} memberInfo={member} />
          )
          )}

      </div>
      <h1 className='font-bold text-center text-3xl mt-12'>Magazine Team</h1>
        <div className='grid md:grid-cols-3 gap-12 '>
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


