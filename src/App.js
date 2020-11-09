import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import Catch from "./components/Catch";
import { MovieSearch } from "./containers/movieDb";
import Card from "./components/card";

function App() {
  /* TODO: With the help of "useState", you should connect the "SearchInput" field */
  const [query, setQuery] = useState("Up");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        color: "white",
      }}
    >
      <div>
        <h1
          style={{
            margin: "25px",
          }}
        >
          Juliette's movies
        </h1>
        <div>
          <SearchInput
            style={{
              margin: "25px",
              height: "40px",
              width: "400px",
            }}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <Catch>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <MovieSearch query={query}>
            {(movies) =>
              movies &&
              movies.map((movie) => (
                <div
                  style={{
                    backgroundColor: "lightblue",
                    width: "30%",
                    margin: "10px",
                  }}
                >
                  <Card
                    style={{
                      height: 200,
                      backgroundImage: movie.backdrop_path
                        ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
                        : null,
                    }}
                  >
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Subtitle>
                        {movie.vote_average} ({movie.vote_count} votes)
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </div>
              ))
            }
          </MovieSearch>
        </div>
      </Catch>
    </div>
  );
}

export default App;
