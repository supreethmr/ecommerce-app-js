import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';

// const Movies = [
//   {
//       "Title": "Star Wars: Episode IV - A New Hope",
//       "Year": "1977",
//       "imdbID": "tt0076759",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
//   },
//   {
//       "Title": "Star Wars: Episode V - The Empire Strikes Back",
//       "Year": "1980",
//       "imdbID": "tt0080684",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
//   },
//   {
//       "Title": "Star Wars: Episode VI - Return of the Jedi",
//       "Year": "1983",
//       "imdbID": "tt0086190",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
//   },
//   {
//       "Title": "Star Wars: Episode VII - The Force Awakens",
//       "Year": "2015",
//       "imdbID": "tt2488496",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
//   },
// ];

const App = () => {
  const [movies, setMovies] = useState([]);
	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=star&apikey=b3be31c2`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
  };

  useEffect(() => {
    getMovieRequest();
  }, []);
  
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
