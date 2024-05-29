import React from 'react'
import './Button.css'
function Button1() {
  return (
    <div className=' ' id='btnstyle1'>
      <div className='relative'>
         <button className='z-2 overflow-hidden customcss border-[3px]  border-[white] text-[30px] px-[80px] py-[20px] text-blue-950  font-bold hover:text-[white]'>Play Now</button>
      </div>
    </div>
  )
}
function Button2() {
  return (
    <div className=' ' id='btnstyle2'>
      <div className='relative'>
         <button className='z-2 overflow-hidden customcss border-[3px]  border-[white] text-[30px] px-[80px] py-[20px] text-blue-950  font-bold hover:text-[white]'>Start Now</button>
      </div>
    </div>
  )
}

export { Button1 , Button2 }
