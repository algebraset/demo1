import React, { createContext, useEffect, useState } from 'react'
export let loginContext=createContext()
export default function MainContext({children}) {
  let [user,setuser]=useState(localStorage.getItem('tokan') ?? '')

    useEffect(()=>{
        localStorage.setItem('tokan',user)
    },[user])

  return (
    <loginContext.Provider value={{user,setuser}}>
       {children}
    </loginContext.Provider>
  )
}

