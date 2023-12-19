import React from 'react'
import Carousel from './widgets/Carousel'

function Section2() {
  return (
    <>
      <div className='w-full flex flex-col items-center py-10'>
        <Carousel />
        <button className='text-[#4B5563] border-[1px] border-[#4B5563] py-3 px-8 rounded-lg font-bold mt-7 active:opacity-40'>View recent work</button>
      </div>
    </>
  )
}

export default Section2
