import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";


const MoviesDes = () => {
  const location= useLocation()
  const films = location.state.data
  return (
    <div className='cards'  >
     <img src={films.posterurl} alt='avatar'/>
      <div className='content'>
      <h1> {films.name} </h1>
      <p>{films.description}</p>
      
      <ReactStars
    count={5}
    value= {films.rating}
    activeColor="#ffd700"
    edit={false}
    
  />
      </div>
    </div>
  )
}

export default MoviesDes
