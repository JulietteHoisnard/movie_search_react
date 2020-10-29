import axios from 'axios'
import React, { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'



function App() {
  /* TODO: With the help of "useState", you should connect the "SearchInput" field */
  const [query, setQuery] = useState('Lord of the Rings')
  useEffect(() => {
    // Update the document title using the browser API
        axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'dbb2cac3572068ef8027a64c000f9389',
          query: query
        },
      })
      .then(res => {
        console.log(res.data)
        Object.values(res.data.results).forEach(element => {
          <li>{element['title']}</li>
        });
      })},
  );

  return (
    <grid>
      <h1>Juliette's movies</h1>
      <SearchInput
        value={query}
        onChange={ event => setQuery(event.target.value)}
      />
    </grid>
  )
};

export default App;
