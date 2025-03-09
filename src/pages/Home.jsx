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
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero1 />
      <Hero2
        extended
        heading={{
          main: "A log home package",
          span: "that delivers more.",
        }}
      >
        <div className="heading-style-h4 semi-bold">
          The home you've dreamed of starts here.
        </div>
        <div className="text-size-regular">
          Not all log homes are created equal. Hochstetler building packages
          feature precision milled logs, true post and beam construction, and a
          complete set of materials from trusted manufacturers. From our timber
          drying process to thoughtful floor plans, discover how we have{" "}
          <Link className="link" to="/difference">
            reimagined the log home building experience.
          </Link>
        </div>
      </Hero2>

      <Hero3 />
      <Hero4
        heading={{ main: "Details that make", span: "the difference" }}
        description={
          "With complete material packages, expert design support, and essential details others often skip, we offer a better building experience. That means no surprise costs, efficient construction, and a home you'll value for life."
        }
      />
      <FaqPitch />
      <TestimonialPitch />
      <RentalsPitch />
      <FloorPlanPitch />
      <NewsLetteCard />
    </>
  );
};

export default Home;
