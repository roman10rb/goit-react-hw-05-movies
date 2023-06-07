import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import { Suspense } from 'react';


const Layout = lazy(() => import( './Layout/Layout'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import( 'pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import( './Reviews/Reviews'));


 const App = () => {
   return (
    <Suspense>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
           <Route path="reviews" element={<Reviews />} />
        </Route>
      
        <Route path="*" element={<Home />} />
      </Route>
       </Routes>
     </Suspense>
  );
};

export default App;
