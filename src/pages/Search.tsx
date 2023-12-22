import axios from 'axios';
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CardMovie from '../components/CardMovie';

function Search() {
  
   const searchURL=import.meta.env.VITE_SEARCH;
   const apikey=import.meta.env.VITE_API_KEY;

  const[searchParams]=useSearchParams();
  const[movie,setMovie]=useState([])
  const query=searchParams.get("q")
  
useEffect(()=>{axios.get(`${searchURL}?${apikey}&query=${query}`).then((res)=>{
  setMovie(res.data.results)
  console.log(res)
}
)

},[query])


  return (
    <div className='flex flex-col  gap-10 items-center py-20 bg-gray-800'>
     {movie.length===0?<h2 className='text-3xl flex items-centerg gap-3 text-yellow-400 uppercase font-bold phone:text-xl tablet:text-2xl'><h2 className='text-white'>Não foi encontrado resultados para </h2>{query}</h2>:<h2 className='text-3xl flex items-centerg gap-3 phone:text-xl tablet:text-2xl text-yellow-400 uppercase font-bold'><h2 className='text-white'>Resultados encontrados para </h2>{query}</h2>} 
      <div className='flex  gap-20 flex-wrap justify-center '>
      {movie.map((movie,key)=>(
        <div key={key}>{<CardMovie movie={movie} showlink={true}/> }  </div>
      ))}
    </div>
    </div>
  )
}

export default Search
