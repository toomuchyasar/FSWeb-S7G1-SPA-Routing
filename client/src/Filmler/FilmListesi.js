import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';


export default function FilmListesi(props) {

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <FilmDetayları key={movie.id} movie={movie} />
      ))}
    </div>
  );
  }

  function FilmDetayları(props) {
  const { title, director, metascore ,id } = props.movie;
  

  
  return (
  <div>
    <Link to={"/filmler/"+id}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div> 
    </Link> 
  </div> 
  );
}
