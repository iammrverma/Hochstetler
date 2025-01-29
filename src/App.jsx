import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// import AboutUs from "./components/AboutUs";
// import Services from "./components/Services";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";



const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </HashRouter>
  );
};

export default App;