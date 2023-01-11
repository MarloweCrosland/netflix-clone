import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  // this requests the movies and sets them to state using the request url passed in
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* use props that were passed in on HomeScreen */}
      <h2>{title}</h2>

      {movies.map((movie) => (
        <img
          src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
          alt={movie.name}
          key={movie.name}
        />
      ))}
    </div>
  );
}

export default Row;
