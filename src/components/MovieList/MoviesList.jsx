import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';



 const MovieList = ({ movies, link }) => {
  const location = useLocation();

  return (
    <ul className={css.Container}>
      {movies.map(({  name, title, id }) => {
        return (
          <li key={id}>
            <Link className={css.Item} to={`${link}${id}`} state={{ from: location }}>
              <h1 className={css.Title} >{name || title}</h1>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

