import { useState, useEffect } from 'react'
import axios from 'axios'

export function useMovieSearch(query) {
  const [state, setState] = useState({movies: null, error: null})

  
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: 'dbb2cac3572068ef8027a64c000f9389',
        query,
      },
    })
    .then(res => {
      setState({ movies: res.data.results, error: null });
    })
    .catch(error => {
      setState({ error, movies: null})
    })
  }, [query])

  if (state.error) {
    throw state.error
  }

  return state.movies
}

export function MovieSearch({ query, children }) {
  const movies = useMovieSearch(query)
  return children(movies)
}
