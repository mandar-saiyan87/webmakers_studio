import React, { useState } from 'react'
import { landingImages } from '../../../../../assets/images/LandingImages'

function FAQ({ qsn, asn }) {

  const [qClick, setQclick] = useState(false)
  return (
    <>
      <div className='max-w-3xl m-auto'>
        <div className='border-b-[1px] border-[EAECF0]'>
          <div className='flex items-center justify-between my-8'>
            <p className='text-xl font-medium text-[#1F2937]'>{qsn}</p>
            {qClick ? <img src={landingImages.minuscircle} alt={landingImages.minuscircle} className='cursor-pointer' onClick={() => setQclick(false)} /> :
              <img src={landingImages.pluscircle} alt={landingImages.pluscircle} className='cursor-pointer' onClick={() => setQclick(true)} />
            }
          </div>
          {qClick &&
            <div className='mt-4 mb-8 max-w-[95%]'>
              <p className='text-base font-medium text-[#6B7280]'>{asn}</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default FAQ