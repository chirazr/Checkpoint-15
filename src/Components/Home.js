import React from 'react'
import './Movies.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <h1>Free Movies to Watch, Anytime Anywhere.</h1>
        <button class="button-23" role="button"><Link to='/playlist' > Watch</Link></button>
      
    </div>
  )
}

export default Home
