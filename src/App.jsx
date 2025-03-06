import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// import AboutUs from "./components/AboutUs";
// import Services from "./components/Services";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import FloorPlans from "./pages/FloorPlans";

import ProjectGallery from "./pages/ProjectGallery";
import HomeTour360 from "./pages/HomeTour360";

import Blogs from "./pages/Blogs";
import Testimonials from "./pages/Testimonials";
import FAQs from "./pages/FAQs";

import Difference from "./pages/Difference";
// import Rentals from "./pages/Rentals";
import Rentals from "./pages/Rentals";
import SpecialityStructures from "./pages/SpecialityStructures";
import Commercials from "./pages/Commercials";

import LogCabinDays from "./pages/LogCabinDays";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { WindowSizeProvider } from "./contexts/WindowSizeContext";
import Footer from "./components/Footer";
import FloorPlanDetail from "./pages/FloorPlanDetail";
import ExtendedProjectGalery from "./pages/ExtendedProjectGalery";
import BlogDetail from "./pages/BlogDetail";
import { FloorPlanProvider } from "./contexts/FloorPlanContext";

const App = () => {
  return (
    <HashRouter>
      <WindowSizeProvider>
        <Navbar />
        <FloorPlanProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/floor-plans" element={<FloorPlans />} />
            <Route path="/floor-plans/:name" element={<FloorPlanDetail />} />

            <Route
              path="/gallery/project-gallery"
              element={<ProjectGallery />}
            />
            <Route
              path="/gallery/project-gallery/:name"
              element={<ExtendedProjectGalery />}
            />

            <Route path="/gallery/home-tour-360" element={<HomeTour360 />} />

            <Route path="/resources/blogs" element={<Blogs />} />
            <Route path="/resources/blogs/:name" element={<BlogDetail />} />

            <Route path="/resources/testimonials" element={<Testimonials />} />
            <Route path="/resources/faqs" element={<FAQs />} />

            <Route path="/about-us/difference" element={<Difference />} />
            <Route path="/about-us/rentals" element={<Rentals />} />
            <Route
              path="/about-us/speciality-structures"
              element={<SpecialityStructures />}
            />
            <Route path="/about-us/commercials" element={<Commercials />} />

            <Route path="/log-cabin-days" element={<LogCabinDays />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </FloorPlanProvider>
        <Footer id="footer" />
      </WindowSizeProvider>
    </HashRouter>
  );
};

export default App;
