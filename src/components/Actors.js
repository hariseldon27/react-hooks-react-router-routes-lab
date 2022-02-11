import React, { useState, useEffect } from "react";
import { actors } from "../data";

function Actors() {
  const [actorList, setActorList] = useState([])

  useEffect(() => {
    setActorList(actors)
  }, [])

  const actorsToShow = actorList.map((act, index) => (
    <div key={index}>
      <h2>{act.name}</h2>
      <ul>
        {act.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul>
    </div>
  ))
  return (
    <>
      <h1>Actors Page</h1>
      {actorsToShow}
    </>
  )
}

export default Actors;
