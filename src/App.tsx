import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BeersPerName from "./components/BeersPerName";
import FavBeers from "./components/FavBeers";
import HomePage from "./components/HomePage/HomePage";
import { FavBeersProvider } from "./Providers/FavBeersProvider";

function App() {
  return (
    <FavBeersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers-per-name" element={<BeersPerName />} />
          <Route path="/fav-beers" element={<FavBeers />} />
        </Routes>
      </BrowserRouter>
    </FavBeersProvider>
  );
}

export default App;
