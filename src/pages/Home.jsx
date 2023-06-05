import { NavLink } from "react-router-dom";
import { fetchMovie } from "servise/movies-api";

const Home = () => {

     async function fetchData() {
      try {
        const {
          data: { results },
        } = await fetchMovie.getTrendingMovie();
        
        const movies = results.map(({ title, id }) => ({ title, id }));

        console.log(movies)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
       
    return (
      <NavLink  to="/"> Home</NavLink>
  )
};

export default Home;