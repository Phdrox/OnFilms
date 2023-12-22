import  { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { IoSearch } from "react-icons/io5";
import { GiPopcorn } from "react-icons/gi";
function NavBar() {
  
  const navigate=useNavigate()
  const[search,setSeach]=useState("")

  const handleSubmit=(e:FormEvent)=>{
     e.preventDefault()

     if(!search) return;
    navigate(`/search?q=${search}`,{replace:true});
    setSeach("")

  }


  return (
    <div className='flex justify-around flex-wrap phone:flex-col  gap-96 tablet:gap-0 phone:gap-0 items-center tablet:h-36 phone:h-32 h-24 bg-gray-900 shadow-2xl shadow-gray-800 w-full'>
      <h2 >
        <Link to='/' className='flex items-center gap-3 text-yellow-400'><GiPopcorn className='text-5xl phone:text-4xl'/> 
          <h1 className='text-5xl phone:text-4xl font-primary uppercase'>OnFilms</h1>
        </Link>
      </h2>
        <form action="" className='mt-7 flex items-center ml-3 phone:my-3 ' onSubmit={handleSubmit} >
            
            <input type="text" 
            placeholder='Busque um filme' 
            className='w-64 h-9 rounded placeholder:pl-2 text-black focus:pl-2 '
            onChange={e=>setSeach(e.target.value)}
            value={search}
             />
            <button type='submit' className='ml-3 bg-yellow-400 rounded p-1'><IoSearch className='text-3xl  text-black bg-yellow-400 rounded '/> </button>
        </form>
    </div>
  )
}

export default NavBar
