import React from 'react'

function Navbar() {
  return (
    <div className='max-w-[1536px] m-auto flex items-center justify-between py-4 px-6'>
      <h2 className='font-bold text-[#374151] text-[24px]'>UniCraft</h2>
      <ul className='flex items-center gap-16'>
        <li className='cursor-pointer active:opacity-40'>How it works</li>
        <li className='cursor-pointer active:opacity-40'>Pricing</li>
        <li className='cursor-pointer active:opacity-40'>FAQ</li>
      </ul>
      <button className='text-[#4B5563] border-[1px] border-[#4B5563] py-3 px-8 rounded-lg font-bold active:opacity-40'>Contact us</button>
    </div>
  )
}

export default Navbar