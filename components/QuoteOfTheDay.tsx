import React from 'react'

const QuoteOfTheDay = () => {
  return (
    <div className="md:mt-0 mt-12 w-full font-serif relative bg-blue-300 rounded-2xl py-12 md:py-24 overflow-hidden flex items-center justify-center ">
      <div className="absolute h-full w-full rounded-full  -top-12 -left-12 animate-spin-slow bg-gradient-to-r from-teal-400  to-indigo-500 blur-[150px]"></div>

      <div className="font-sfheavy  relative text-xl  md:text-5xl z-[10] px-6 md:w-[50%]">
        <span className="md:text-[300px] font-serif -mt-12 -left-12  text-black/10   absolute">
          &#8220;
        </span>
        Sometimes it is the people no one can imagine anything of who do the things no one can imagine
        <p className="font-sflight text-sm md:text-xl italic">- Alan Turing</p>
        <span className="md:text-[300px] -mt-24 right-0 font-serif  text-black/10 absolute">
          &#8221;
        </span>
      </div>
    </div>
  )
}

export default QuoteOfTheDay
