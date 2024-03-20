"use client"
import { list } from 'postcss'
import {React, useState} from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, {task, desc}]);
    
    settask("");
    setdesc(""); //reload hone pe item gayab hone se rokega.
    console.log(mainTask);//console.log(task + desc);

  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
    

  }

  let renderTask = <h2>No task available !</h2>
  
  if(mainTask.length > 0){
  renderTask = mainTask.map((t, i) => {
    return(
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='text-bold text-2xl'>
          <h2>{t.task}</h2>
        </div>
        <div className='text-semibold text-xl'>
          <h2>{t.desc}</h2>
        </div>
        <button onClick={() => deleteHandler(i)}
        className='flex items-center p-2 rounded-lg justify-between bg-red-400 text-white'>
          Delete

        </button>
      </li>
    )
    
    
  
  })};

  return (
    <>
    <h1 className='text-bold text-white text-center text-2xl bg-zinc-700 p-10'>Pranav's Task Manager</h1>
    <form className='inline-flex' onSubmit={submitHandler}>
      <input type="text" 
      className = 'border-2 px-4 py-2 m-5 border-sky-500 '
      placeholder='write your task here'
      value = {task}
      onChange={(e) =>  settask(e.target.value)}/> <br/>

      <input type="text"
      className = 'border-2 px-4 py-2 m-5 border-sky-500 '
      placeholder='Enter description here'
      value={desc}
      onChange={(e) => setdesc(e.target.value)} /><br/>
      <button className='bg-black px-1 py-1 text-2xl text-semibold rounded text-white m-5'>
        Add Task
      </button>
      
      
    </form>
    <hr />
    <div className='bg-sky-200 p-8'>
      <ul>
        {renderTask}
      </ul>
    </div>


    </>
  )
}

export default page

// usestate hook in react act like a variable in react to store data