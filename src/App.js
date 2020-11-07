import React, { useState } from 'react'
import SearchInput from './components/SearchInput'
import Catch from './components/Catch'
import { MovieSearch } from './containers/movieDb'

function App() {
  /* TODO: With the help of "useState", you should connect the "SearchInput" field */
  const [query, setQuery] = useState('Lord of the Rings');

  return (
    <div>
      <h1>Juliette's movies</h1>
      <SearchInput
        value={query}
        onChange={ event => setQuery(event.target.value)}
      />
      <Catch>
        <MovieSearch query={query}>
          {movies =>
          movies && movies.map(movie => <p key={movie.id}>{movie.title}</p>)
          }
        </MovieSearch>
      </Catch>
    </div>
  )
};

export default App;
