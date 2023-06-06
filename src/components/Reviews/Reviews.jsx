import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'servise/movies-api';

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
                <p>Author: {author}</p>
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