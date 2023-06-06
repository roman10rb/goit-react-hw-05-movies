import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from 'servise/movies-api';



const Cast = () => {
  const [cast, setCast] = useState([]);
  

  const { movieId } = useParams();

    useEffect(() => {
    
    if (!movieId) {
      return;
      }
      
    const fetchCast = async () => {
     
      try {
        const data = await getMovieCast(movieId);
        setCast([...data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
    
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ profile_path, character, original_name, id }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : 'https://m.media-amazon.com/images/I/51dCwRZxtLL.jpg'
                  }
                  alt={original_name}
                />
                <p>{original_name}</p>
                <p>"{character}"</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, there is no information</p>
      )}
    </>
  );
};


export default Cast;