import React from "react";
import Hero1 from "../components/Hero1";
import Hero4 from "../components/Hero4";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import NewsLetteCard from "../components/NewsLetteCard";
import TestimonialPitch from "../components/TestimonialPitch";
import FloorPlanPitch from "../components/FloorPlanPitch";
import FaqPitch from "../components/FaqPitch";
import RentalsPitch from "../components/RentalsPitch";

const Home = () => {
  return (
    <>
      <Hero1 />
      <Hero2
        extended
        heading={{
          main: "A log home package",
          span: "that delivers more.",
        }}
        subheading={"The home you've dreamed of starts here."}
        description={
          "At Hochstetler, we've reimagined the log home experience to solve the challenges of the past, ensuring every detail meets your aspirations for , comfort, and lasting value. Discover how you can embrace tradition while experiencing the innovation  ease of today's living."
        }
      />
      <Hero3 />
      <Hero4 heading={{main:"Details that make", span:"the difference"}} description={"With complete material packages, expert design support, and essential details others often skip, we offer a better building experience. That means no surprise costs, efficient construction, and a home you'll value for life."}/>
      <FaqPitch />
      <TestimonialPitch />
      <RentalsPitch />
      <FloorPlanPitch />
      <NewsLetteCard />
    </>
  );
};

export default Home;
