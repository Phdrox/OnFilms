import axios from 'axios'
import{ useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CardMovie from '../components/CardMovie';
import { FaWallet } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { TbClockHour2 } from "react-icons/tb";



const apikey=import.meta.env.VITE_API_KEY;
const movieAPI=import.meta.env.VITE_API;

function Movie() {
  
  const{id}=useParams()
  const[movie,setMovie]=useState<any>()
  
  
  
  
useEffect(()=>{
  axios.get(`${movieAPI}${id}?${apikey}`)
  .then(
    res=>{
    setMovie(res.data)
    console.log(res.data)
    }
    )
},[])
const converter = (minutos:number) => {
  const horas = Math.floor(minutos/ 60);          
  const min = minutos % 60;
  const textoHoras = (`00${horas}`).slice(-2);
  const textoMinutos = (`00${min}`).slice(-2);
  
  return `${textoHoras }:${textoMinutos}`;
};




return (
  <div className='py-10 bg-gray-800'>
    <Link to={`/`} className='text-white mt-10'><FaArrowLeft className='text-yellow-400 text-4xl ml-5'/></Link>
    {movie&&(
    <>
      <div className='flex gap-10 pl-10 pt-10 bg-gray-800 rounded flex-wrap'> 
        <CardMovie movie={movie}  />
        <div className='w-3/4 flex flex-col gap-3 bg-gray-900 p-3 rounded phone:w-11/12  tablet:w-11/12'> 
          <h2 className='flex flex-wrap'>{movie.overview}</h2>
          <p className='flex items-center gap-2'><p className='text-yellow-400 uppercase font-semibold'>Tagline:</p> {movie.tagline}</p>
          <div>
            <h3 className='flex items-center gap-3'><FaWallet className='text-yellow-400'/> Budget: {'$' + movie.budget+',00'}</h3>
            <h3  className='flex items-center gap-3'><GoGraph className='text-yellow-400'/> Revenue: {'$'+movie.revenue+',00'}</h3>
            <h3 className='flex items-center gap-3'><SlCalender className='text-yellow-400'/> Release Date: {movie.release_date}</h3>
            <h3 className='flex items-center gap-3'><TbClockHour2 className='text-yellow-400'/>Runtime: {converter(movie.runtime)}</h3>
          </div>
           
        </div>
      </div>
   </>
      )}
    
  </div>
  )
}

export default Movie
