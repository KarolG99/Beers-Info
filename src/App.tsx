import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BeersPerName from "./components/BeersPerName";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers-per-name" element={<BeersPerName />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
