import { BsFilm } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import { Link } from 'react-router-dom';

interface ICard{
 
    movie:any
    showlink?:boolean
}

function CardMovie({movie,showlink}:ICard) {

const img=import.meta.env.VITE_IMG


  return (
    <div className='flex  justify-center flex-col w-72 h-full  bg-gray-900 pb-4 rounded-lg gap-2 items-center phone:w-52 '>
        <img src={img+movie.poster_path} alt="Banner" className='w-full h-80 phone:h-52 rounded-t-lg ' />
        
    
      <div className='flex flex-col items-start gap-2 pl-2 pt-2 text-yellow-400 w-full'>
        <h2 className='flex gap-2 items-center  text-sm phone:text-xs '><BsFilm/> <p className='text-white'>{movie.title}</p></h2>
        <h2 className='flex gap-2 items-center'><FaStar/> <p className='text-white'>{movie.vote_average.toFixed(2)}</p></h2>
      
      </div>   
       {showlink&&<Link to={`/movie/${movie.id}`} className='p-5 border-2  border-yellow-400 rounded-md w-11/12 flex items-center justify-center hover:bg-yellow-400 duration-200 '>Detalhes</Link>}
    </div>
  )
}

export default CardMovie
