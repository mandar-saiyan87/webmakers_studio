import React from 'react'
import Navbar from '../../../Navbar'
import { landingImages } from '../../../../assets/images/LandingImages'

function Section1() {

  const trusted_comp = [landingImages.zapier, landingImages.spotify, landingImages.zoom, landingImages.slack, landingImages.amazon, landingImages.adobe]

  return (
    <>
      <div className='bg-cover bg-no-repeat h-auto m-auto' style={{ backgroundImage: `url(${landingImages.mainbg2})` }}>
        <div className=''>
          <Navbar />
          <div className='max-w-[1440px] flex flex-col m-auto text-center items-center mt-10 px-2 lg:px-0 lg:my-24'>
            <h1 className='max-w-[1236px] text-4xl font-black text-[#1F2937] lg:text-7xl lg:leading-[80px]'>Elevate Your Presence with Seamless Design and Innovation.</h1>
            <p className='my-4 text-base font-medium text-[#4B5563] lg:text-xl lg:'>From strategic planning to digital presence, we're your dedicated partner in achieving solo success.</p>
            <button className='text-xl text-[#F9FAFB] py-4 px-[34px] rounded-lg bg-[#1F2937] font-bold my-3 shadow-[inset_2px_4px_10px_0px_rgba(203, 203, 203, 0.20)] active:opacity-80'>View Pricing</button>
            <div className='my-28'>
              <p className='text-sm text-[#9CA3AF] font-medium'>Trusted By 250+ Companies</p>
              <div className='grid mt-4 grid-cols-1 place-items-center sm:grid-cols-3 lg:grid-cols-6'>
                {trusted_comp.map(image => {
                  return (
                    <div className='flex items-center justify-center'>
                      <img src={image} className='' key={image} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1


// <>
// <div className='bg-top bg-no-repeat h-screen m-auto' style={{ backgroundImage: `url(${landingImages.mainbg})` }}>
//   <div className=''>
//     <Navbar />
//     <div className='max-w-[1440px] flex flex-col m-auto text-center items-center my-24'>
//       <h1 className='max-w-[1101px] text-[65px] font-extrabold leading-[80px] text-[#1F2937]'>Elevate Your Presence with Seamless Design and Innovation.</h1>
//       <p className='my-4 font-medium text-lg text-[#4B5563]'>From strategic planning to digital presence, we're your dedicated partner in achieving solo success.</p>
//       <button className='text-[#F9FAFB] py-3 px-8 rounded-lg bg-[#1F2937] font-bold my-3 shadow-[inset_2px_4px_10px_0px_rgba(203, 203, 203, 0.20)] active:opacity-80'>View Pricing</button>
//       <div className='my-28'>
//         <p className='text-sm text-[#9CA3AF] font-medium'>Trusted By 250+ Companies</p>
//         <div className='flex mt-4'>
//           {trusted_comp.map(image => {
//             return (
//               <img src={image} className='' key={image} />
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   </>