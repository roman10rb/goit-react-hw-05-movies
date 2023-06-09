import { useParams } from 'react-router-dom';
import css from "./Reviews.module.css"
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'servise/movies-api';
import PropTypes from 'prop-types';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);


  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchReviews = async () => {
      
      try {
        const data = await getMovieReviews(movieId);
        setReviews([...data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
    
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p className={css.Author}>Author: {author}</p>
                <p>"{content}"</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, there is no information</p>
      )}
    </>
  );
}

Reviews.propTypes = {
  getMovieReviews: PropTypes.func,
};