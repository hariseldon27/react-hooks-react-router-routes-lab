import React, { useEffect, useState } from "react";
import { directors } from "../data";

function Directors() {
  
  const [directorList, setDirectorList] = useState([])
  
  useEffect(() => {
    setDirectorList(directors)
  }, [])
  
  function ListItem(props) {
    return <li>{props.value}</li>
  }

  const directorsToShow = directorList.map((dir, index) => (
      <div key={index}>
        <h2>{dir.name}</h2>
        <h4>Films</h4>
        <ul>
          {/* <ListItem key={index} value={dir} /> */}
          {dir.movies.map((movie, index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>
  ))

  return ( 
    <>
      <h1>Directors Page</h1>
      <div>{directorsToShow}</div>
    </>
  )
}

export default Directors;
