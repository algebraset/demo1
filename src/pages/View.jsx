import React, { useContext, useEffect, useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { app } from '../Firebaseconfig';
import { getDatabase, ref, onValue } from "firebase/database";
import { loginContext } from '../context/MainContext';


export default function () {
  let {user,setuser}=useContext(loginContext)
  let [finalquestion,setfinalQueation]=useState([])
  let [next,setnext]=useState(0)
  let navigator=useNavigate()
  console.log(next)
  const db = getDatabase(app);
  useEffect(()=>{
    const dbData= ref(db, 'quiz/');
    onValue(dbData, (snapshot) => {
      const data = snapshot.val();
      
      let question=[]
      for (let key in data){
        let items=data[key]
        question.push(items)
       }
       
       console.log(question)
       setfinalQueation(question)
    })
  },[])

  useEffect(()=>{
    if(user==='')
        navigator('/register')

  },[user])


  return (
    <div>
      <section className='sticky top-0 z-10'>
        <div className='w-[100%] py-4 flex items-center justify-between bg-sky-400'>
          <div className='text-[rgb(255,255,255)] text-[40px]  pl-7 pb-2'><span className='text-[50px] text-[red] font-bold shadow-2xl'>F</span>ire<span className='text-[50px] text-[#1c4918] font-bold shadow-2xl'>B</span>ase</div>
          <div className='flex items-center'>
            <ul className='flex items-center pr-7'>
              <li className='text-[white] font-semibold px-4 text-[18px] cursor-pointer'>
                <Link to={'/login'}><button className='px-5 py-1 block border border-1 border-[white] bg-white text-sky-400 rounded-sm hover:bg-green-950 hover:text-[white]  '>Logout</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='w-[980px] mx-auto my-5  '>
        {finalquestion.length >=1 
        ?
            finalquestion.map((v,i)=>{
              return(
                <div className='w-[90%] mx-auto p-4 mb-4 shadow-sm shadow-sky-400 rounded-xl'>
                <div className='w-full text-[25px] border rounded-lg px-4 border-1 border-sky-400 py-2 text-sky-400 font-bold mb-4'>Q-{i+1} {v.question}
                </div>
                <div className='grid grid-cols-2 gap-4'>
                 <div className='border rounded-lg px-4 border-1 border-sky-400 py-2 text-sky-400 font-bold  mb-2 cursor-pointer hover:bg-sky-400 hover:text-[white] text-[20px]'> <span className='text-[25px] mr-3'>A</span> {v.optionA}
                 </div>
                 <div className='border rounded-lg px-4 border-1 border-sky-400 py-2 text-sky-400 font-bold  mb-2 cursor-pointer text-[20px] hover:bg-sky-400 hover:text-[white]'> <span className='text-[25px] mr-3'>B</span> {v.optionB}
                 </div>
                 <div className='border rounded-lg px-4 border-1 border-sky-400 py-2 text-sky-400 font-bold  mb-2 cursor-pointer text-[20px] hover:bg-sky-400 hover:text-[white]'> <span className='text-[25px] mr-3'>C</span> {v.optionC}
                 </div>
                 <div className='border rounded-lg px-4 border-1 border-sky-400 py-2 text-sky-400 font-bold  mb-2 cursor-pointer text-[20px] hover:bg-sky-400 hover:text-[white]'> <span className='text-[25px] mr-3'>D</span>  {v.optionD}
                 </div>
                </div>
           </div>
              )
            })
        
         :
         
         "No queation Here"}
        

      </section>
      <div className='flex items-center justify-evenly py-5'>
         <button className='text-[20px] text-sky-600 px-8 py-1 border border-2 rounded-md border-sky-600 hover:bg-sky-600 hover:text-[white] font-bold ' onClick={()=>setnext(next-1)}>Prev</button>
         <button className='text-[20px] text-green-600 px-8 py-1 border border-2 rounded-md border-green-600 hover:bg-green-600 hover:text-[white] font-bold ' onClick={()=>setnext(next+1)} >Next</button>
      </div>
    </div>
  )
}
