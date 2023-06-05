import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Movies from "pages/Movies";
import Home from "pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>

    );
};
export default App;

// 9ae8fd93ae6d092b9ce69048ddd475c5
