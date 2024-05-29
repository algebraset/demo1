import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link, useNavigate } from 'react-router-dom'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebaseconfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
  let navigator=useNavigate()
 
  let [dirlogin,setdirlogin]=useState(null)
  const auth = getAuth(app);
  let createuserfun=(event)=>{

    event.preventDefault()
    
    let gmail=event.target.gmail.value;
    let password=event.target.password.value;
    createUserWithEmailAndPassword(auth, gmail, password)
        .then((userCredential) => {
         
          const user = userCredential.user;
          setdirlogin(user)
          toast.success('Create Account Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            event.target.reset();
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error('Somthing is Wroung / Email Already Exists', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
         
       });
       

 
    
  } 
  useEffect(()=>{
    
      if(dirlogin!==null){
        setTimeout(()=>{navigator("/login")},2000)
        
      }
  },[dirlogin])
  return (
    <section className='w-[100%] h-screen flex justify-center items-center bg-sky-200 '>
      <Fade direction='down' >
        <div className="">

          <div className='w-[500px] bg-white pb-5 rounded-md shadow-md'>
            <div className='text-[40px] absolute right-[32px] top-[18px] font-bold   cursor-pointer z-20 hover:text-[white]'> <Link to={'/'}>&times;</Link></div>
            <div className='w-[100%] text-center py-1 pb-1 text-[40px] bg-sky-400 text-[white] rounded-t-md'>
              <span className='text-[50px] text-[red] font-bold shadow-2xl'>F</span>ire <span className='text-[50px] text-[#1c4918] font-bold shadow-2xl'>B</span>ase
            </div>
            <div className='text-center py-4 font-bold'>
              <h2 className='text-[30px] text-sky-600 '>Register Here </h2>
            </div>
            <form onSubmit={createuserfun}>
                {/* <div className='w-[79%] mx-auto mb-2'>
                  <input type='text' placeholder='User Name' className='p-2 w-[100%] outline-2 border-none outline outline-sky-400 text-sky-800 text-[20px] rounded-sm ' />
                </div> */}
                {/* <div className='w-[79%] mx-auto mb-2'>
                  <input type='text' placeholder='Father Name' className='p-2 w-[100%] outline-2 border-none outline outline-sky-400 text-sky-800 text-[20px] rounded-sm ' />
                </div>
                <div className='w-[79%] mx-auto mb-2'>
                  <input type='age' placeholder='Age' className='p-2 w-[100%] outline-2 border-none outline outline-sky-400 text-sky-800 text-[20px] rounded-sm ' />
                </div> */}
                <div className='w-[79%] mx-auto mb-2'>
                  <input type='email' name='gmail' placeholder='Gmail' className='p-2 w-[100%] outline-2 border-none outline outline-sky-400 text-sky-800 text-[20px] rounded-sm ' />
                </div>
                <div className='w-[79%] mx-auto mb-2'>
                  <input type='password' name='password' placeholder='Password' className='p-2 w-[100%] outline-2 border-none outline outline-sky-400 text-sky-800 text-[20px] rounded-sm ' />
                </div>
                {/* <div className='w-[79%] mx-auto mb-2'>
                  <input type='number' placeholder='Mobile Number' className='p-2 w-[100%] outline-2 border-none outline outline-sky-400 text-sky-800 text-[20px] rounded-sm ' />
                </div> */}
                {/* <div className='w-[79%] mx-auto mb-2 '>
                  
                  <textarea className='p-2 w-[100%] outline-2 border-none outline outline-sky-400 text-sky-800 text-[20px] rounded-sm'> address</textarea>
                </div> */}
                <div className='w-[80%] mx-auto mt-4 '>
                  <button className='w-[100%] py-4 rounded-sm bg-sky-400 hover:bg-sky-700 text-[white] font-bold text-[20px]'>Register</button>
                </div>
            </form>
            <div className='w-[80%] mx-auto mb-1 text-start'>
              <button className='w-[100%] py-4 font-bold text-[20px]'>Already Register?? <span className='text-sky-400 ml-4 hover:text-sky-900 '><Link to={'/login'}>Login Here</Link>   </span></button>
            </div>
           
          </div>

        </div>
      </Fade>
      <ToastContainer/>
    </section>
  )
}
