import React from 'react'
import { Button1 , Button2 } from './Button'
import { Link } from 'react-router-dom'
import i1 from '../images/quiz.jpg'
export default function Homemiddle() {
  return (
   <section>
      <div className='w-[100%] h-[696px] bg-sky-400 relative border-b border-b-1 border-b-[white]'>
        <div className='w-[100%] mx-auto'><img src={i1} className='w-[300px] h-[250px] mx-auto  shadow-lg cursor-pointer shadow-sky-800 hover:shadow-[white] hover:shadow-8xl'/>
        </div>
        <div className='text-center  flex items-center justify-center gap-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              
                <Link to={'/view'}><Button1/></Link>
                <Button2/>
      </div>
            
      </div>
      
   </section>
  )
}
