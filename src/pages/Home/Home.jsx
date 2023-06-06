import MovieList from 'components/MovieList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'servise/movies-api';




export default function Home() {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
    const fetchMovies = async () => {
      
      try {
        const movies = await getTrendingMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
       <MovieList movies={movies} link={'movies/'} />
    </div>
  );
}