import React, { useState } from 'react'
import './Movies.css'

const AddMovie = ({fun}) => {
    const [newmovie, setnewmovie] = useState({
        name: "",
        posterurl:"",
        description :"''",
        rating : "",
    })
  return (
    <div className='input'>
      <input type='text' placeholder='name' onChange={(e)=>setnewmovie({...newmovie, name:e.target.value})}></input>
      <input type='text' placeholder='poster' onChange={(e)=>setnewmovie({...newmovie, posterurl:e.target.value})}></input>
      <input type='text' placeholder='description' onChange={(e)=>setnewmovie({...newmovie, describe:e.target.value})}></input>
      <input type='number' placeholder='rate'  onChange={(e)=>setnewmovie({...newmovie, rating:e.target.value})}></input>

<button  onClick={()=>fun(newmovie)} >ADD</button>

    </div>
  )
}

export default AddMovie
