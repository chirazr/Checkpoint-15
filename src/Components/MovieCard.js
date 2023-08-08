import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const MovieCard = ({data}) => {
  return (
    <Link to='/description' state={{data:data}}> <div className='cards' >
     <img src={data.posterurl} alt='avatar'/>
      <div className='content'>
      <h1> {data.name} </h1>
      <p>{data.description}</p>
      
      <ReactStars
    count={5}
    value= {data.rating}
    activeColor="#ffd700"
    edit={false}
    
  />
      </div>
    </div>
    </Link>
  ) 
}

export default MovieCard
