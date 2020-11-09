import { useReducer, useEffect } from "react";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "empty":
      return { error: null, movies: [] };
    case "success":
      return { error: null, movies: action.res.data.results };
    case "error":
      return { error: action.error, movies: null };
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
}

const initialState = { movies: null, error: null };

export function useMovieSearch(query) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!query) {
      dispatch({ type: "empty" });
      return;
    }
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "dbb2cac3572068ef8027a64c000f9389",
          query,
        },
      })
      .then((res) => {
        dispatch({ type: "success", res });
      })
      .catch((error) => {
        dispatch({ type: "error", error });
      });
  }, [query]);

  if (state.error) {
    throw state.error;
  }

  return state.movies;
}

export function MovieSearch({ query, children }) {
  const movies = useMovieSearch(query);
  return children(movies);
}
