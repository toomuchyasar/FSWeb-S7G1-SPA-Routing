import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FilmListesi from './Filmler/FilmListesi'
import Film from './Filmler/Film'
import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import { Route, Switch } from 'react-router-dom';



export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler')
        .then(response => { 
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = id => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };


 

return (
    <div>
      <KaydedilenlerListesi list={[ /* Burası esnek */]} />
        <div>
          <Switch>
            <Route path="/filmler/:id">
              <Film />
            </Route>
            <Route path="/">
              <FilmListesi movies={movieList}/>
            </Route>
          </Switch>
        </div>
    </div>
  );
}
