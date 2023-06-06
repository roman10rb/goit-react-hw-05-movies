
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '9ae8fd93ae6d092b9ce69048ddd475c5',
};

class fetchMovies {
  
}

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getMovieBySearch = async query => {
  const { data } = await axios.get(`search/movie`, {
    params: {
      query: query,
      page: 1,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`);
  return data.results;
};