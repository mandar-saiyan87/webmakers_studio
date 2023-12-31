import React from 'react'
import { landingImages } from '../../../../../assets/images/LandingImages'

function TestimonialTile() {
  return (
    <>
      <div className='py-24 md:px-[90px]'>
        <div className='flex flex-col items-center justify-center text-center px-14'>
          <img src={landingImages.companylogo} alt={landingImages.companylogo} />
          <p className='text-base font-bold my-10 lg:text-5xl'>We’ve been with unicraft to kick start every new project and can’t imagine working without it.</p>
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-2'>
          <img src={landingImages.Avatar} alt={landingImages.Avatar} />
          <h4 className='text-lg font-medium text-[#101828] mt-5 md:text-base'>Candice Wu</h4>
          <p className='text-sm text-[#667085] font-normal my-1 md:text-base'>Product Manager, Sisyphus</p>
        </div>
      </div>
    </>
  )
}

export default TestimonialTile
