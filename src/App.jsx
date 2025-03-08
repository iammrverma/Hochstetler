import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import FloorPlans from "./pages/FloorPlans";

import ProjectGallery from "./pages/ProjectGallery";
import HomeTour360 from "./pages/HomeTour360";

import Blogs from "./pages/Blogs";
import Testimonials from "./pages/Testimonials";
import FAQs from "./pages/FAQs";

import Difference from "./pages/Difference";
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

            <Route path="/project-gallery" element={<ProjectGallery />} />
            <Route
              path="/project-gallery/:name"
              element={<ExtendedProjectGalery />}
            />

            <Route path="/home-tour-360" element={<HomeTour360 />} />

            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:name" element={<BlogDetail />} />

            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faqs" element={<FAQs />} />

            <Route path="/difference" element={<Difference />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route
              path="/speciality-structures"
              element={<SpecialityStructures />}
            />
            <Route path="/commercials" element={<Commercials />} />

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
