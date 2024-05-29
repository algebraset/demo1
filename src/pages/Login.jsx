import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebaseconfig';
import { useContext } from 'react';
import { loginContext } from '../context/MainContext';
export default function Login() {
  let navigator=useNavigate()
  // let [loginlodar,setloginloader]=useState(false)
  let {user,setuser}=useContext(loginContext)
 
  let redirecthomepage=(event)=>{
    // setloginloader(true)
    event.preventDefault()
    
    let email=event.target.gmail.value;
    let password=event.target.password.value;
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
  
        const user = userCredential.user;
        setuser(user.accessToken)
    // setloginloader(false)
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  

  }
  useEffect(()=>{
    if(user!==''){
      navigator('/')
    }
  },[user])
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
              <h2 className='text-[30px] text-sky-600 '>Log In </h2>
            </div>
            <form onSubmit={redirecthomepage}>
                <div className='w-[79%] mx-auto mb-4'>
                  <input type='mail' name='gmail' placeholder='Username' className='p-4 w-[100%] outline-2 border-none outline outline-sky-400 text-sky-800 text-[20px] rounded-sm ' />
                </div>
                <div className='w-[79%] mx-auto mb-4'>
                  <input type='Password' name='password' placeholder='Password' className='p-4 w-[100%] outline-2 border-none outline outline-sky-400 text-sky-800 text-[20px] rounded-sm ' />
                </div>
                <div className='w-[80%] mx-auto mt-4 '>
                  <button className=' w-[100%] py-4 rounded-sm bg-sky-400 hover:bg-sky-700 text-[white] font-bold text-[20px]'>Login
                    {/* {loginlodar 
                      ? 
                        <button type="button" class="bg-indigo-500 ..." disabled>
                          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                          
                          </svg>
                        Processing...
                      </button> 
                      :
                      ''
                      } */}
                  </button>
                </div>
            </form>
            <div className='w-[80%] mx-auto mb-1 text-start'>
              <button className='w-[100%]  py-4 font-bold text-[20px]'>No Account ??<span className='text-sky-400 ml-4 hover:text-sky-900 '><Link to={'/register'}>Register Here</Link>   </span></button>
            </div>
            <div className='w-[80%] mx-auto mb-4'>
              <button className='w-[100%] py-4 rounded-sm bg-sky-400 hover:bg-sky-700 text-[white] font-bold text-[20px]'> <span className='p-[6px] rounded-full bg-[white] text-sky-600 mr-3'>G+</span>Login with Google</button>
            </div>
            <div className='w-[80%] mx-auto mb-4'>
              <button className='w-[100%] py-4 rounded-sm bg-sky-400 hover:bg-sky-700 text-[white] font-bold text-[20px]'> Login with Mobile</button>
            </div>
          </div>

        </div>
      </Fade>
    </section>
  )
}
