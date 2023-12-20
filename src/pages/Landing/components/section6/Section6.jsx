import React from 'react'
import FAQ from './widget/FAQ'

function Section6() {

  const asnText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum doloremque maxime quod tempora quis pariatur, error eaque eligendi excepturi, eveniet ea earum? Quia iste dicta nulla expedita, perferendis doloremque, ducimus, perspiciatis totam officiis facilis quasi ipsam sit? Fugit, numquam corrupti?'
  return (
    <>
      <div className='h-auto m-auto py-[74px]'>
        <div className='max-w-[1440px] m-auto flex flex-col items-center justify-center text-center'>
          <h2 className='text-[42px] font-bold lg:text-[58px]'>Frequently asked questions</h2>
          <p className='text-base font-medium text-[#6B7280] max-w-xl text-center mt-5 lg:text-xl'>Everything you need to know about the product and billing.</p>
        </div>
        <div className='px-2 my-16 md:px-0'>
          <FAQ qsn={"Is there a free trial available?"}
            asn={"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible"} />
          <FAQ qsn={"Can I change my plan later?"}
            asn={asnText} />
          <FAQ qsn={"What is your cancellation policy?"}
            asn={asnText} />
          <FAQ qsn={"Can other info be added to an invoice?"}
            asn={asnText} />
          <FAQ qsn={"How does billing work?"}
            asn={asnText} />
          <FAQ qsn={"How do I change my account email?"}
            asn={asnText} />
        </div>
      </div>
    </>
  )
}

export default Section6
