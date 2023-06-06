import MovieList from 'components/MovieList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch }  from 'servise/movies-api';




export default function Movies() {
  
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const fetchMovies = async () => {
     
      try {
        setSearchQuery(movieName);
        const data = await getMovieBySearch(movieName);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
      
      }
    };
    fetchMovies();
  }, [movieName]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchQuery });
    event.target.reset();
  };

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="submit"></button>
          <input
            type="text"
          
            placeholder="Search movies"
            name="movieName"
            onChange={e => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
       <MovieList movies={movies} link={''} />
    </main>
  );
}