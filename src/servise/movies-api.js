import axios from "axios";


const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = BASE_URL;

class fetchMovies {


 options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWU4ZmQ5M2FlNmQwOTJiOWNlNjkwNDhkZGQ0NzVjNSIsInN1YiI6IjY0MzNhZTJiNmRlYTNhMDBkNDM4M2UwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WBxLNZR5X7XOil2slMyrz5m2K4QG3DI9OaK7f9i50MU'
  }
    };

    
async getTrendingMovie() {
    return await axios.get(`/trending/movie/day`, this.options);
  }
    




};

export  const fetchMovie = new fetchMovies()