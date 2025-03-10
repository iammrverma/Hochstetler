import React from "react";
import Hero2 from "../components/Hero2";
import Header from "../components/Header";
import headerBg from "../assets/header-bg.png";
import image from "../assets/testimonial-image.jpg";
import { TestimonialList } from "../components/TestimonialPitch";
import { useWindowSize } from "../contexts/WindowSizeContext";
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
const Testimonials = () => {
  const { width } = useWindowSize();
  const large = width > 1080;
  return (
    <div>
      <Header backgroundImage={headerBg} image={image} styles={{padding:""}}>
        <Hero2
          heading={{ main: "Stories from", span: "Our Clients" }}
          smallheading={"Built on trust"}
          headingWrap={large}
          style={{padding:"2rem"}}
        >
          <div className="text-dark">

          Meet homeowners who have built their dream log homes with us.
          </div>
        </Hero2>
      </Header>
      <h3 className={"text-green text-center"}>In their words</h3>
      <div
        style={{
          padding: "1rem",
          marginInline: "auto",
        }}
      >
        <TestimonialList
          testimonials={testimonialData}
          
          styles={{ marginInline: "auto", width:`${large?'50rem':'100%'}` }}
        />
      </div>
    </div>
  );
};

export default Testimonials;
