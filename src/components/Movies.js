import React, { useEffect, useState } from "react";
import { movies } from "../data";




function Movies() {
  
  const [movieList, setMovieList] = useState([])

  
  useEffect(() => {
    setMovieList(movies)
  }, [])

  const moviesToShow = movieList.map((movie, index) => (
    <div key={index}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time} mins</p>
      <h3>Genres</h3>
      <ul>
        {movie.genres.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <hr/>
    </div>
  

))
// console.log(movieList)

// console.log(movieList)


  return (
    <div>
      <h1>Movies Page</h1>
      <div>{moviesToShow}</div>
      
    </div>
  )
}
export default Movies;
