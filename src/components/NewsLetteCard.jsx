import React, { useState } from "react";
import NewsLetterInput from "./NewsLetterInput";
import newsletterImg from "../assets/newsletter.jpg";
export const NoImageNewsLetter = ({ className }) => {
  const [value, setValue] = useState("");
  return (
    <div
      className="flex-center newsletterCard"
      style={{
        backgroundColor: "var(--base-color-hochstetler-brand--hlh-beige-med)",
      }}
    >
      <div className={`flex-column right `}>
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
          <p className="text-size-small w-full">
            Join the 9,000+ readers of Log Home Life!
          </p>
        </div>
      </div>
    </div>
  );
};
const NewsLetteCard = () => {
  return (
    <div className="newsletterCard grid-2-4-1 text-center" id="newsletterCard">
      <div className="left">
        <img src={newsletterImg} alt="" />
      </div>

      <NoImageNewsLetter />
    </div>
  );
};

export default NewsLetteCard;
