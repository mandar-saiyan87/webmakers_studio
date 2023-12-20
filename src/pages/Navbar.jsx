import React from 'react'

function Navbar() {
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
      <div className='flex max-w-[1536px] m-auto items-center justify-between py-4 px-6 lg:hidden'>
        <h2 className='font-bold text-[#374151] text-xl'>UniCraft</h2>
        <div className='' onClick={() => { }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </div>
        {/* <ul className='flex items-center gap-16'>
          <li className='text-lg text-[#374151] font-medium cursor-pointer active:opacity-40'>How it works</li>
          <li className='text-lg text-[#374151] font-medium cursor-pointer active:opacity-40'>Pricing</li>
          <li className='text-lg text-[#374151] font-medium cursor-pointer active:opacity-40'>FAQ</li>
        </ul> */}
        {/* <button className='text-lg text-[#4B5563] border-[1px] border-[#4B5563] py-3 px-[34px] rounded-lg font-bold active:opacity-40'>Contact us</button> */}
      </div>
    </>
  )
}

export default Navbar