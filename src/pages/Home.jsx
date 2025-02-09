import React from "react";
import Hero1 from "../components/Hero1";
import Hero4 from "../components/Hero4";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Footer from "../components/Footer";
import NewsLetteCard from "../components/NewsLetteCard";
import TestimonialPitch from "../components/TestimonialPitch";

const Home = () => {
  return (
    <div>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <TestimonialPitch />
      <NewsLetteCard />
      <Footer />
    </div>
  );
};

export default Home;
