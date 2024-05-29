import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { loginContext } from '../context/MainContext'


export default function Header() {
   let {user,setuser}=useContext(loginContext)
   let logout=()=>{
    setuser('')
   }

  return (
    <section className='sticky top-0 z-10'>
      
    <div className='w-[100%] py-4 flex items-center justify-between bg-sky-400'>
        <div className='text-[rgb(255,255,255)] text-[40px]  pl-7 pb-2'><span className='text-[50px] text-[red] font-bold shadow-2xl shadow-[green]'>F</span>ire<span className='text-[50px] text-[#1c4918] font-bold shadow-2xl'>B</span>ase</div>
        <div className='flex items-center'>
          <ul className='flex items-center pr-7'>
            <Link to={'/view'}><li className='text-[white] font-semibold px-4 text-[18px] cursor-pointer'>View</li></Link>
            <Link to={'/addquiz'}><li className='text-[white] font-semibold px-4 text-[18px] cursor-pointer'>Add Quiz</li></Link>
            </ul>
           {
            user==="" 
            ?
            <ul className='flex items-center pr-7'>
            <li className='text-[white] font-semibold px-4 text-[18px] cursor-pointer'>
            <Link to={'/login'}><button className='px-8 py-1 block border border-1 border-[white] bg-white text-sky-400 rounded-sm hover:bg-green-950 hover:text-[white] '>Login</button></Link>
                
            </li>
            <li className='text-[white] font-semibold px-4 text-[18px] cursor-pointer'>  <Link to={'/register'}><button className='px-5 py-1 border border-1 border-[white] bg-white text-sky-400 rounded-sm hover:bg-sky-400 hover:text-[white]'>Register</button></Link></li></ul>
            :
            <ul>
            <li className='text-[white] font-semibold px-4 text-[18px] cursor-pointer'>
            <button onClick={logout} className='px-8 py-1 block border border-1 border-[white] bg-white text-sky-400 rounded-sm hover:bg-green-950 hover:text-[white] '>Logout</button></li>
            </ul>
           }
            
         
          
        
        </div>
        
    </div>
    </section>
    
  )
}
