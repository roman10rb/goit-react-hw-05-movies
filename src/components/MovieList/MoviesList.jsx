import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import PropTypes from 'prop-types';


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


MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
  link: PropTypes.string,
};
