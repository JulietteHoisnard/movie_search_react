import axios from 'axios'
import React, { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'



function App() {
  /* TODO: With the help of "useState", you should connect the "SearchInput" field */
  const [query, setQuery] = useState('Lord of the Rings');
  const movies = useMovieSearch(query);

  return (
    <div>
      <h1>Juliette's movies</h1>
      <SearchInput
        value={query}
        onChange={ event => setQuery(event.target.value)}
      />
      {movies.map(movie => <p key={movie.id}>{movie.title}</p>)}
    </div>
  )
};


function useMovieSearch(query) {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: 'dbb2cac3572068ef8027a64c000f9389',
      query,
    },
  })
  .then(res => {
    console.log(res.data)
    setMovies(res.data.results);
  });
}, [query])
return movies
}

export default App;
