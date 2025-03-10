import React from "react";
import TestimonialCard from "./TestimonialCard";
import { useWindowSize } from "../contexts/WindowSizeContext";
import ButtonPrimary from "./buttons/ButtonPrimary";
const testimonialData = [
  {
    rating: 5,
    message:
      "Hochstetler Log Homes was absolutely fabulous to work with in all phases, “Of the sales, design and delivery process”. All of the Log Cabin materials were of very high quality. Our cabin is beautiful and will be in our family the next 100+ years.",
    name: "Dil ko Raja",
    location: "Chahne valo ke dil mai",
  },
  {
    rating: 4,
    message:
      "The team at Hochstetler Log Homes is knowledgeable and professional. The delivery was on time, and the quality exceeded my expectations.",
    name: "Aman Singh",
    location: "Delhi, India",
  },
  {
    rating: 5,
    message:
      "My experience was outstanding! From design to delivery, the process was seamless. We are thrilled with our log cabin.",
    name: "Emily Johnson",
    location: "Ohio, USA",
  },
  {
    rating: 4.5,
    message:
      "The materials were excellent, and the team was always available to address my concerns. I highly recommend them.",
    name: "Rahul Kumar",
    location: "Bangalore, India",
  },
  {
    rating: 5,
    message:
      "Building our dream cabin with Hochstetler Log Homes was a fantastic journey. The quality and craftsmanship are top-notch.",
    name: "Sophia Brown",
    location: "Texas, USA",
  },
  {
    rating: 4.8,
    message:
      "We love our new log home! The process was smooth, and the result is breathtaking. Thanks for everything!",
    name: "Chris Evans",
    location: "Sydney, Australia",
  },
  {
    rating: 4.9,
    message:
      "The quality of the materials and the attention to detail made all the difference. This cabin is perfect for our family.",
    name: "Anjali Verma",
    location: "Mumbai, India",
  },
  {
    rating: 5,
    message:
      "Our log home turned out better than we could have imagined. Every step of the process was handled with care.",
    name: "John Carter",
    location: "New York, USA",
  },
  {
    rating: 4.7,
    message:
      "Hochstetler Log Homes provided excellent service. Their craftsmanship and commitment to quality are remarkable.",
    name: "Ravi Shankar",
    location: "Hyderabad, India",
  },
  {
    rating: 5,
    message:
      "The team at Hochstetler Log Homes turned our vision into reality. The cabin is a dream come true.",
    name: "Anna Lee",
    location: "Toronto, Canada",
  },
  {
    rating: 4.6,
    message:
      "From start to finish, the process was easy and enjoyable. The materials are top-notch, and the cabin is stunning.",
    name: "James Bond",
    location: "London, UK",
  },
  {
    rating: 4.9,
    message:
      "We couldn’t be happier with our log cabin. The craftsmanship is impeccable, and the team was amazing to work with.",
    name: "Sara White",
    location: "California, USA",
  },
  {
    rating: 5,
    message:
      "Amazing experience! The cabin is beautiful, and the team at Hochstetler Log Homes was supportive throughout the process.",
    name: "Michael Scott",
    location: "Scranton, USA",
  },
  {
    rating: 4.8,
    message:
      "Our new log home is everything we dreamed of and more. Thanks to the incredible team for making it happen.",
    name: "Priya Sharma",
    location: "Chennai, India",
  },
  {
    rating: 4.5,
    message:
      "We are thrilled with the outcome! The quality of the materials and the professionalism of the team were outstanding.",
    name: "Steve Rogers",
    location: "Brooklyn, USA",
  },
];
export const TestimonialList = ({ testimonials, styles }) => {
  return (
    <div
      className="flex-column"
      style={{
        gap: "2rem",
        alignItems: "flex-start",
        ...styles,
      }}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          rating={testimonial.rating}
          message={testimonial.message}
          name={testimonial.name}
          location={testimonial.location}
        />
      ))}
    </div>
  );
};
const TestimonialPitch = () => {
  const { width } = useWindowSize();
  const groupedTestimonials = [];
  const test_columns = Math.floor(width / 320);
  const listNum = Math.ceil(testimonialData.length / test_columns); // Calculate items per column

  for (let i = 0; i < testimonialData.length; i += listNum) {
    groupedTestimonials.push(testimonialData.slice(i, i + listNum)); // Slice array into groups
  }

  return (
    <div
      className="flex-column"
      style={{ alignItems: "center", padding: "4rem 2rem", gap: "2rem" }}
    >
      <div className="header text-center">
        <h2 className="text-green">Our Client Stories</h2>
        <p className="text-size-medium">
          Meet the homeowners who brought their dreams to life with Hochstetler.
        </p>
      </div>

      <div
        className="flex"
        style={{
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        {groupedTestimonials.map((group, groupIndex) => (
          <TestimonialList
            testimonials={group}
            groupIndex={groupIndex}
            key={groupIndex}
          />
        ))}
      </div>
      <ButtonPrimary
        text={"Read Our Testimonials"}
        to={"/testimonials"}
      />
    </div>
  );
};

export default TestimonialPitch;
