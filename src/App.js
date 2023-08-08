import React from 'react';
import  './App.css'
import Navbarr from "./Components/Navbarr";
import MoviesList from './Components/MoviesList';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MoviesDes from './Components/MoviesDes';
import PlayList from './Components/PlayList';


function App() {
  return (
    <div className="App">
      
      <Navbarr /> 
      


      <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/movies' element={<MoviesList />}></Route>
      <Route path='/description' element={<MoviesDes />}></Route>
      <Route path='/playlist' element={<PlayList />}></Route>
      
      
      </Routes>

  

    </div>
  );
}

export default App;
