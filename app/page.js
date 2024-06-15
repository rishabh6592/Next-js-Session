'use client'
import React, { useState } from 'react'

const page = () => {
  const [name,setname] = useState("rishabh")

  const namehanderlar = () =>{
      setname("krishna")
  }
  return (
    <div className='w-full h-screen bg-red-800 flex items-center text-2xl justify-center flex-col'>
      my name is : {name}
      <br/>
      <button onClick={namehanderlar} className='py-1 px-5 bg-green-500 text-white rounded-md '>change name </button>
     </div>
       
  )
}

export default page;