import React, { useState } from "react";
import NewsLetterInput from "./NewsLetterInput";
import newsletterImg from "../assets/newsletter.jpg";
const NewsLetteCard = () => {
  const [value, setValue] = useState("");
  return (
    <div className="newsletterCard grid text-center">
      <div className="left">
        <img src={newsletterImg} alt="" />
      </div>
      <div className="flex-column right">
        <h3 className="">
          Subscribe to <span className="text-red-accent">Log Home Life</span>
        </h3>
        <p className="text-size-medium">
          Let us bring a little inspiration to your inbox. Sign up for our
          quarterly newsletter and receive expert advice, seasonal updates and
          more!
        </p>
        <div>
          <NewsLetterInput value={value} setValue={setValue} />
          <p className="text-size-small">
            Join the 9,000+ readers of Log Home Life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetteCard;
