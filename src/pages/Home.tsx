import { useState,useEffect } from "react"
import axios from "axios";
import CardMovie from "../components/CardMovie";
import {Swiper,SwiperSlide} from "swiper/react";
import { Pagination,Autoplay} from "swiper/modules";
import Loader from "../components/Loader";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";




function Home() {
  
  const image=import.meta.env.VITE_IMG
  const movieapi=import.meta.env.VITE_API;
  const apikey=import.meta.env.VITE_API_KEY;
  const[topmovies,setTopMovies]=useState([])
  const[upcoming,setUpComing]=useState([])

  
  useEffect(()=>{
  
    axios.get(`${movieapi}top_rated?${apikey}`)
    .then((res)=>{
      setTopMovies(res.data.results)})

  },[])

  useEffect(()=>{
  
    axios.get(`${movieapi}now_playing?language=pt_BR&page=1`,{headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGZkOTUxYjk4NjIzOGM2MTM5OGVhODJjMjczYTVlYiIsInN1YiI6IjY1ODIzNjY2MmY4ZDA5MDhkNWE4Zjg3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hcImFKW-6m2Vm65-wggNNHtzdV3zz9PG16YSQ6JrPSU"
    }}).then(res=>{
    setUpComing(res.data.results)
    console.log(res.data)
    })

  },[])
 
  return (
   
    <div className="w-full bg-gray-800 flex justify-center items-center flex-col gap-4 pb-10">  
  
  <Swiper loop={true} slidesPerView={4} breakpoints={{
320:{
  width:320,
  slidesPerView:2
  },
481:{
  width:480,
  slidesPerView:3
},
780:{
  width:1024,

  slidesPerView:3
}
}}  
  
  modules={[Pagination,Autoplay]} pagination={{clickable:true}}  autoplay={{delay:2000}} className="flex w-full  text-yellow-400">
    {upcoming.map((movie:any)=>(     
      <SwiperSlide >
        <img src={`${image+movie.poster_path}`} alt="" />
      </SwiperSlide>
    ))}  
  </Swiper>
      
      <h1 className=" flex justify-center item-center gap-2 text-3xl mt-10 border-y-2 p-2 border-yellow-400 w-full uppercase font-bold "><FaStar className='text-yellow-400'/>Top Rating</h1>
      <div className="w-full bg-gray-800 flex flex-wrap py-16 gap-16 phone:gap-3  items-center justify-center ">
        {topmovies.length===0 && <Loader />}
     {topmovies.length>0 && topmovies.map((movie:any,key)=>(<CardMovie movie={movie} showlink={true}/>))}
      </div>
      
    </div>
  )
}

export default Home
