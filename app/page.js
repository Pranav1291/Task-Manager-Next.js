"use client"
import {React, useState} from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  return (
    <>
    <h1 className='text-semibold text-white text-center text-2xl bg-zinc-700'>Pranav's Task Manager</h1>
    <form>
      <input type="text" 
      className = 'border-2 px-4 py-2 m-5 border-sky-500 '
      placeholder='write your task here'
      value = {task}
      onChange={(e) =>  settask(e.target.value)}/>

      <input type="text" 
      className = 'border-2 px-4 py-2 m-5 border-sky-500 '
      placeholder='Enter description here'
      value={desc}
      onChange={(e) => setdesc(e.target.value)} /><br/>
      <button className='bg-black px-1 py-1 text-2xl text-semibold rounded text-white m-5'>
        Add Task
      </button>
      
      
    </form>


    </>
  )
}

export default page

// usestate hook in react act like a variable in react to store data