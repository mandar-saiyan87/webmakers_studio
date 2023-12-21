import React from 'react'

function Section3() {
  return (
    <>
      <div className='hidden lg:flex flex-col items-center justify-center max-w-[90%] m-auto my-12 py-12 xl:px-10 rounded-3xl border-[1px] border-[#E5E7EB] shadow-xl shadow-[rgba(28, 25, 23, 0.05)]'>
        <h3 className='text-5xl text-[#1F2937] font-bold text-center'>How it works</h3>
        <p className='my-4 font-medium text-xl text-[#4B5563]'>Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
        <div className='w-full mt-5 grid grid-cols-3 place-items-center lg:gap-7'>
          <div className='w-full h-full flex flex-col items-center relative'>
            <div className='sectiongrad text-[240px] font-bold font-satoshi'>1</div>
            <div className='absolute lg:w-[85%] xl:w-[75%] items-center text-center bottom-16 lg:left-7 xl:left-14'>
              <h3 className='text-[#1F2937] text-[40px] font-black'>Subscribe</h3>
              <p className='text-[#6B7280]'>Subscribe to a plan & you’ll get an instant access to your private Slack channel.</p>
            </div>
          </div>
          <div className='w-full h-full flex flex-col items-center justify-center relative'>
            <div className='sectiongrad text-[240px] font-bold font-satoshi'>2</div>
            <div className='absolute lg:w-[85%] xl:w-[75%] items-center text-center bottom-16 lg:left-6 xl:left-14'>
              <h3 className='text-[#1F2937] text-[40px] font-black'>Request</h3>
              <p className='text-[#6B7280]'>Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours</p>
            </div>
          </div>
          <div className='w-full h-full flex flex-col items-center justify-center relative'>
            <div className='sectiongrad text-[240px] font-bold font-satoshi'>3</div>
            <div className='absolute lg:w-[85%] xl:w-[75%] items-center text-center bottom-16 lg:left-6 xl:left-14'>
              <h3 className='text-[#1F2937] text-[40px] font-black'>Revise</h3>
              <p className='text-[#6B7280]'>Need changes? We guarantee unlimited revisions until you're 200% satisfied.</p>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Section3
