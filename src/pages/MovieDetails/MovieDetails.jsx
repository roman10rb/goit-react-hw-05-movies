import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { getMovieById }  from 'servise/movies-api';


export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  


  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovies = async () => {
    
      try {
        const { poster_path, name, title, overview, genres, vote_average } =
          await getMovieById(movieId);
        setMovieDetails({
          poster_path,
          name: name || undefined,
          title: title || undefined,
          vote_average: vote_average.toFixed(1),
          overview,
          genres: genres.map(({ name }) => name + ' '),
        });
      } catch (error) {
        console.log(error.message);
      } 
    };
    fetchMovies();
  }, [movieId]);

 
  const { poster_path, name, title, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
        <div>
            
              <Link to={location.state?.from ?? '/'}>
                Go back
              </Link>
              <div>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : 'https://media.istockphoto.com/id/1191001701/photo/popcorn-and-clapperboard.jpg?s=612x612&w=0&k=20&c=iUkFTVuU8k-UCcZDxczTWs6gkRa0nAMihp2Jf_2ASKM='
                  }
                  alt={name || title}
                />
                <div>
                  <h1>{name || title || 'No info'}</h1>
                  <p>Rating: {vote_average || 'Not found'}</p>
                  <p>Overview:</p>
                  <p>{overview || 'Not found'}</p>
                  <h2>Genres:</h2>
                  <p>{genres || 'Others'}</p>
                </div>
              </div>
              <div>
                <h2>Additional information</h2>
                <ul>
                  <li>
                    <Link
                      to="cast"
                      state={{ from: location.state?.from ?? '/' }}
                    >
                      Cast
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="reviews"
                      state={{ from: location.state?.from ?? '/' }}
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>
              <Outlet />
            
        </div>
      
    </>
  );
}
