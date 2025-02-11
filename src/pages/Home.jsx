import React from "react";
import Hero1 from "../components/Hero1";
import Hero4 from "../components/Hero4";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Footer from "../components/Footer";
import NewsLetteCard from "../components/NewsLetteCard";
import TestimonialPitch from "../components/TestimonialPitch";
import FloorPlanPitch from "../components/FloorPlanPitch";
import FaqPitch from "../components/FaqPitch";
import RentalsPitch from "../components/RentalsPitch";

const Home = () => {
  return (
    <div>
      <Hero1 />
      <Hero2
        extended
        heading={{
          main: "Inspired by nature.",
          span: "Built for modern life.",
        }}
        subheading={"The home you've dreamed of starts here."}
        description={
          "At Hochstetler, we've reimagined the log home experience to solve the challenges of the past, ensuring every detail meets your aspirations for , comfort, and lasting value. Discover how you can embrace tradition while experiencing the innovation  ease of today's living."
        }
      />
      <Hero3 />
      <Hero4 />
      <FaqPitch />
      <TestimonialPitch />
      <RentalsPitch />
      <FloorPlanPitch />
      <NewsLetteCard />
      <Footer />
    </div>
  );
};

export default Home;
