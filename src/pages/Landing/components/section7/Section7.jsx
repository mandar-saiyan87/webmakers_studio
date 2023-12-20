import React from 'react'
import { landingImages } from '../../../../assets/images/LandingImages'

function Section7() {
  return (
    <>
      <div className='bg-cover bg-no-repeat h-auto m-auto' style={{ backgroundImage: `url(${landingImages.BGfooter})` }}>
        <div className='max-w-7xl m-auto px-2 md:px-0'>
          <div className='flex flex-col items-center justify-center text-center border-b-[1px] border-[#D1D5DB] pt-28 pb-16'>
            <p className='text-[42px] font-black text-[#101828] lg:text-7xl'>No long-term contracts.</p>
            <p className='text-[42px] font-black text-[#101828] mt-3 lg:text-7xl'>No catches. Simple.</p>
            <p className='text-lg font-medium text-[#667085] my-8'>Start your 30-day free trial. Cancel anytime.</p>
            <button className='text-lg text-[#F9FAFB] py-4 px-[34px] rounded-lg bg-[#1F2937] font-bold shadow-[inset_2px_4px_10px_0px_rgba(203, 203, 203, 0.20)] active:opacity-80'>Contact us</button>
          </div>
          <div className='items-center mt-5 mb-3'>
            <div>
              <p className='text-lg font-bold text-[#374151]'>UniCraft</p>
              <p className='text-lg font-medium text-[#9CA3AF] mt-3'>Design amazing digital experiences that<br></br>
                create more happy in the world.</p>
            </div>
            <div className='flex items-center justify-between  mt-7'>
              <p className='text-base font-normal text-[#98A2B3]'>© 2077 Untitled UI. All rights reserved.</p>
              <div className='grid grid-cols-3 gap-6 md:grid-cols-6'>
                <img src={landingImages.twitter} alt={landingImages.twitter} />
                <img src={landingImages.linkdn} alt={landingImages.linkdn} />
                <img src={landingImages.facebook} alt={landingImages.facebook} />
                <img src={landingImages.github} alt={landingImages.github} />
                <img src={landingImages.Socialicon1} alt={landingImages.Socialicon1} />
                <img src={landingImages.Socialicon2} alt={landingImages.Socialicon2} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Section7
