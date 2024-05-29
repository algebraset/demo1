import React from 'react'
import { Link } from 'react-router-dom'
import { app } from '../Firebaseconfig';
import { getDatabase, ref, set } from "firebase/database";


export default function Addquiz() {
  const db = getDatabase(app);
  let addqueData=(event)=>{
    event.preventDefault() 
    let quesobj={
    'question':event.target.question.value,
    'optionA':event.target.optionA.value,
    'optionB':event.target.optionB.value,
    'optionC':event.target.optionC.value,
    'optionD':event.target.optionD.value,
    'answer':event.target.answer.value
  }
  set(ref(db, 'quiz/' + "quesID"+new Date().getTime()),  quesobj);
  event.target.reset()
}
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
      <section >
        <div className='w-[980px] mt-3 mx-auto border shadow-md'>
          <h1 className='text-center font-bold text-[35px] py-4 text-sky-400'>Add Question For Quiz</h1>
        </div>
          <form onSubmit={addqueData} action=''>
            <div className='w-[980px] mt-3 mx-auto border shadow-md'>
              <div className='w-full p-2 my-2 flex items-center justify-center '>
                <div className='basis-[10%] bg-sky-400 text-[white]  text-center font-bold p-3'> Qestion </div>
                <div className='basis-[80%] bg-sky-400 text-[white]'>
                  <input type='text' className='w-[100%] p-2 border-none outline-none text-sky-400 text-[24px]' name='question' placeholder='Type our question here ????' required/>
                </div>

              </div>
              <div className='w-full p-2 my-2 flex items-center justify-center '>
                <div className='basis-[10%] bg-sky-400 text-[white]  text-center font-bold p-3' >Option A</div>
                <div className='basis-[80%] bg-sky-400 text-[white]'>
                  <input type='text' className='w-[100%] p-2 border-none outline-none text-sky-400 text-[24px]'name='optionA' placeholder='Type our Answer here ????'required />
                </div>

              </div>
              <div className='w-full p-2 my-2 flex items-center justify-center '>
                <div className='basis-[10%] bg-sky-400 text-[white]  text-center font-bold p-3'>Option B</div>
                <div className='basis-[80%] bg-sky-400 text-[white]'>
                  <input type='text' className='w-[100%] p-2 border-none outline-none text-sky-400 text-[24px]' name='optionB' placeholder='Type our Answer here ????' required/>
                </div>

              </div>
              <div className='w-full p-2 my-2 flex items-center justify-center '>
                <div className='basis-[10%] bg-sky-400 text-[white]  text-center font-bold p-3'>Option C</div>
                <div className='basis-[80%] bg-sky-400 text-[white]'>
                  <input type='text' name='optionC' className='w-[100%] p-2 border-none outline-none text-sky-400 text-[24px]' placeholder='Type our Answer here ????' required />
                </div>

              </div>
              <div className='w-full p-2 my-2 flex items-center justify-center '>
                <div className='basis-[10%] bg-sky-400 text-[white]  text-center font-bold p-3'>Option D</div>
                <div className='basis-[80%] bg-sky-400 text-[white]'>
                  <input type='text' name='optionD' className='w-[100%] p-2 border-none outline-none text-sky-400 text-[24px]' placeholder='Type our Answer here ????' required/>
                </div>

              </div>
              <div className='w-full p-2 my-2 flex items-center justify-center '>
                <div className='basis-[15%] bg-green-500 text-[white]  text-center font-bold p-3'>Right Answer</div>
                <div className='basis-[80%] bg-sky-400 text-[white]'>
                  <input type='text' name='answer'className='w-[100%] p-2 border-none outline-none text-green-500 text-[24px]' placeholder='Type our Right Answer ' required/>
                </div>

              </div>
              <div className='w-full p-2 my-2 grid grid-cols-2 gap-[400px]  '>
                <div className='text-center' ><button className='bg-sky-700 px-10 py-3 text-[22px] font-bold text-[white]  text-center hover:bg-sky-950 rounded-sm'> Add Question</button></div>

              </div>
            </div>
            </form>
      </section>
    </div>
  )
}
