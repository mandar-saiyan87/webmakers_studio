import React from 'react'
import { landingImages } from '../../../assets/images/LandingImages'

function Section5() {
  return (
    <div className='bg-cover bg-no-repeat h-auto m-auto py-20' style={{ backgroundImage: `url(${landingImages.pricingbg})` }}>
      <div className='max-w-[1440px] m-auto flex flex-col items-center justify-center text-center'>
        <h2 className='text-6xl font-bold'>Pricing made for collaborative support.</h2>
        <p className='text-lg font-medium text-[#6B7280] max-w-xl text-center mt-5'>Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.</p>
      </div>
      <div className='m-auto flex items-center justify-center'>
        <div className='max-w-7xl grid grid-cols-3 gap-12 my-12 place-items-center'>
          <div className='max-w-[90%] py-10 px-6 border-[1px] border-[#E5E7EB] rounded-2xl bg-[#FFF]'>
            <h5 className='text-base font-bold text-[#191D23]'>Freebie</h5>
            <p className='text-sm font-medium text-[#6B7280] max-w-[70%] my-3'>Ideal for individuals who need quick access to basic features.</p>
            <div className='flex items-center gap-2 my-6'>
              <p className='text-[#1F2937] text-5xl font-medium'>$0</p>
              <span className='text-[#4B5563] text-base font-normal'>/ Month</span>
            </div>
            <button className='w-full text-[#4B5563] text-sm font-medium border-[1px] border-[#4B5563] rounded-lg py-2 px-3 my-3 active:opacity-40'>Get Started Now</button>
            <div className='mt-5'>
              <div className='flex gap-1 text-sm font-medium text-[#1F2937] mt-2'>
                <img src={landingImages.charmcircletick} alt={landingImages.charmcircletick} />
                <p>20,000+ of PNG & SVG graphics</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#1F2937] mt-2'>
                <img src={landingImages.charmcircletick} alt={landingImages.charmcircletick} />
                <p>Access to 100 million stock images</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#9CA3AF] mt-2'>
                <img src={landingImages.charmcircletickdisable} alt={landingImages.charmcircletickdisable} />
                <p>Upload custom icons and fonts</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#9CA3AF] mt-2'>
                <img src={landingImages.charmcircletickdisable} alt={landingImages.charmcircletickdisable} />
                <p>Unlimited Sharing</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#9CA3AF] mt-2'>
                <img src={landingImages.charmcircletickdisable} alt={landingImages.charmcircletickdisable} />
                <p>Upload graphics & video in up to 4k</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#9CA3AF] mt-2'>
                <img src={landingImages.charmcircletickdisable} alt={landingImages.charmcircletickdisable} />
                <p>Unlimited Projects</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#9CA3AF] mt-2'>
                <img src={landingImages.charmcircletickdisable} alt={landingImages.charmcircletickdisable} />
                <p>Instant Access to our design system</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#9CA3AF] mt-2'>
                <img src={landingImages.charmcircletickdisable} alt={landingImages.charmcircletickdisable} />
                <p>Create teams to collaborate on designs</p>
              </div>
            </div>
          </div>
          <div className='max-w-[90%] py-10 px-6 border-[1px] rounded-xl bg-[#1F2937] shadow-2xl shadow-[rgba(31, 41, 55, 0.20)]'>
            <h5 className='text-base font-bold text-[#FFF]'>Professional</h5>
            <p className='text-sm font-medium text-[#FFF] my-3 max-w-[95%]'>Ideal for individuals who who need advanced features and tools for client work.</p>
            <div className='flex items-center gap-2 my-6'>
              <p className='text-[#FFF] text-5xl font-medium'>$25</p>
              <span className='text-[#FFF] text-base font-normal'>/ Month</span>
            </div>
            <button className='w-full text-[#1F2937] text-sm font-medium bg-[#F9FAFB] rounded-lg py-2 px-3 my-3 active:opacity-40'>Get Started Now</button>
            <div className='mt-5'>
              <div className='flex gap-1 text-sm font-medium text-[#FFF] mt-2'>
                <img src={landingImages.charmcircletickblack} alt={landingImages.charmcircletickblack} />
                <p>20,000+ of PNG & SVG graphics</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#FFF] mt-2'>
                <img src={landingImages.charmcircletickblack} alt={landingImages.charmcircletickblack} />
                <p>Access to 100 million stock images</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#FFF] mt-2'>
                <img src={landingImages.charmcircletickblack} alt={landingImages.charmcircletickblack} />
                <p>Upload custom icons and fonts</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#FFF] mt-2'>
                <img src={landingImages.charmcircletickblack} alt={landingImages.charmcircletickblack} />
                <p>Unlimited Sharing</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#FFF] mt-2'>
                <img src={landingImages.charmcircletickblack} alt={landingImages.charmcircletickblack} />
                <p>Upload graphics & video in up to 4k</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#9CA3AF] mt-2'>
                <img src={landingImages.charmcircletickdisable} alt={landingImages.charmcircletickdisable} />
                <p>Unlimited Projects</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#9CA3AF] mt-2'>
                <img src={landingImages.charmcircletickdisable} alt={landingImages.charmcircletickdisable} />
                <p>Instant Access to our design system</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#9CA3AF] mt-2'>
                <img src={landingImages.charmcircletickdisable} alt={landingImages.charmcircletickdisable} />
                <p>Create teams to collaborate on designs</p>
              </div>
            </div>
          </div>
          <div className='max-w-[90%] py-10 px-6 border-[1px] border-[#E5E7EB] rounded-2xl bg-[#FFF]'>
            <h5 className='text-base font-bold text-[#191D23]'>Enterprise</h5>
            <p className='text-sm font-medium text-[#6B7280] my-3 max-w-[95%]'>Ideal for businesses who need personalized services and security for large teams. </p>
            <div className='flex items-center gap-2 my-6'>
              <p className='text-[#1F2937] text-5xl font-medium'>$100</p>
              <span className='text-[#4B5563] text-base font-normal'>/ Month</span>
            </div>
            <button className='w-full text-[#4B5563] text-sm font-medium border-[1px] border-[#4B5563] rounded-lg py-2 px-3 my-3 active:opacity-40'>Get Started Now</button>
            <div className='mt-5'>
              <div className='flex gap-1 text-sm font-medium text-[#1F2937] mt-2'>
                <img src={landingImages.charmcircletick} alt={landingImages.charmcircletick} />
                <p>20,000+ of PNG & SVG graphics</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#1F2937] mt-2'>
                <img src={landingImages.charmcircletick} alt={landingImages.charmcircletick} />
                <p>Access to 100 million stock images</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#1F2937] mt-2'>
                <img src={landingImages.charmcircletick} alt={landingImages.charmcircletick} />
                <p>Upload custom icons and fonts</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#1F2937] mt-2'>
                <img src={landingImages.charmcircletick} alt={landingImages.charmcircletick} />
                <p>Unlimited Sharing</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#1F2937] mt-2'>
                <img src={landingImages.charmcircletick} alt={landingImages.charmcircletick} />
                <p>Upload graphics & video in up to 4k</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#1F2937] mt-2'>
                <img src={landingImages.charmcircletick} alt={landingImages.charmcircletick} />
                <p>Unlimited Projects</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#1F2937] mt-2'>
                <img src={landingImages.charmcircletick} alt={landingImages.charmcircletick} />
                <p>Instant Access to our design system</p>
              </div>
              <div className='flex gap-1 text-sm font-medium text-[#1F2937] mt-2'>
                <img src={landingImages.charmcircletick} alt={landingImages.charmcircletick} />
                <p>Create teams to collaborate on designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5