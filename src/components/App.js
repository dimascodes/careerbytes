import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Questions"; // Ubah menjadi "Test"
import About from "./About";
import ResultsPage from "./ResultsPage";
import Questions from "./Questions";

const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          /* <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />{" "}
          {/* Ganti label menjadi Test */}
          <Route path="/Questions" element={<Questions />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
