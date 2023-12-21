import React, { useState } from 'react'

function Navbar() {

  const [showNav, setShownav] = useState(false)

  const [tab, setTab] = useState('tab1')

  if (showNav) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }


  return (
    <>
      {/* Desktop Navbar */}
      <div className='hidden lg:flex max-w-[1536px] m-auto items-center justify-between py-4 px-6'>
        <h2 className='font-bold text-[#374151] text-2xl'>UniCraft</h2>
        <ul className='hidden lg:flex items-center gap-16'>
          <li className='text-lg text-[#374151] font-medium cursor-pointer active:opacity-40'>How it works</li>
          <li className='text-lg text-[#374151] font-medium cursor-pointer active:opacity-40'>Pricing</li>
          <li className='text-lg text-[#374151] font-medium cursor-pointer active:opacity-40'>FAQ</li>
        </ul>
        <button className='text-lg text-[#4B5563] border-[1px] border-[#4B5563] py-3 px-[34px] rounded-lg font-bold active:opacity-40'>Contact us</button>
      </div>
      {/* Tablet & Mobile Navbar */}
      <div className='flex max-w-[1536px] m-auto items-center justify-between py-4 px-6 relative lg:hidden'>
        <h2 className='font-bold text-[#374151] text-xl'>UniCraft</h2>
        <div className='' onClick={() => setShownav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

      </div>
      <div className={showNav ? `fixed w-full h-screen top-0 left-0 bg-black/30 z-30 lg:hidden` : ''} onClick={() => setShownav(false)}>
        <div className={showNav ? `fixed top-0 left-0 bg-white w-[70%] h-screen ease-in duration-500 overflow-y-scroll no-scrollbar sm:w-[40%]` : 'fixed top-0 -left-[100%] duration-500'} onClick={(e) => e.stopPropagation()}>
          <div className='h-full'>
            <div className='py-3 px-2'>
              <h2 className='font-bold text-[#374151] text-lg'>UniCraft</h2>
            </div>
            <div className='flex flex-col items-center justify-center mt-10 gap-10'>
              <ul className='flex flex-col justify-center items-center gap-10'>
                <li className={tab === 'tab1' ? 'text-lg text-white bg-black py-2 px-4 font-medium cursor-pointer rounded-lg' : 'text-lg text-[#374151] font-medium cursor-pointer active:opacity-40'} onClick={() => { setTab('tab1'), setShownav(false) }}>How it works</li>
                <li className={tab === 'tab2' ? 'text-lg text-white bg-black py-2 px-4 font-medium cursor-pointer rounded-lg' : 'text-lg text-[#374151] font-medium cursor-pointer active:opacity-40'} onClick={() => { setTab('tab2'), setShownav(false) }}>Pricing</li>
                <li className={tab === 'tab3' ? 'text-lg text-white bg-black py-2 px-4 font-medium cursor-pointer rounded-lg' : 'text-lg text-[#374151] font-medium cursor-pointer active:opacity-40'} onClick={() => { setTab('tab3'), setShownav(false) }}>FAQ</li>
              </ul>
              <button className='text-base text-[#4B5563] border-[1px] border-[#4B5563] mb-auto py-2 px-6 rounded-lg font-semibold active:opacity-40' onClick={() => { setShownav(false) }}>Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar