import { Link, useLocation } from 'react-router-dom';


 const MovieList = ({ movies, link }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ poster_path, name, title, id }) => {
        return (
          <li key={id}>
            <Link to={`${link}${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width={300}
              />
              <h1>{name || title}</h1>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

