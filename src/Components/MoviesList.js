import React, { useState } from 'react'
import { Movies } from '../Movies';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import ReactStars from "react-rating-stars-component";


const MoviesList = () => {
  const [films, setfilms] = useState(Movies)
  const addfilms=(x)=>{
    setfilms ([x, ...films])

  }
  const [search, setsearch] = useState("")
  const [rate, setrate]= useState(0)
  const ratingChange =(newRating)=>{
    setrate(newRating);
  };

  return (
    <>
      <AddMovie fun={addfilms}/>
  <div className='bts'>
            <input type='text' placeholder='search' onChange={(e)=>setsearch(e.target.value)}/>
           <ReactStars 
           count={5}
           size={24}
           onChange={ratingChange}
           activeColor="#ffd700"
           
           />
           </div>
    <div className='container'>
      {films.filter((el)=>(el.name.toLowerCase().includes(search.toLowerCase()))&&(el.rating==rate)).map((el)=> <MovieCard data={el}/>)}
    </div>
    </>
  )
}

export default MoviesList
