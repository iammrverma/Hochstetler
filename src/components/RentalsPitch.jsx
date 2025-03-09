import React from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";
import whiteBg from "../assets/white-bg.png";
import Cluster from "./Cluster";

const RentalsPitch = () => {
  return (
    <div
      className="grid-2-1 min-h-full"
      style={{
        gap: "2rem",
        margin: "8rem 0",
        padding: "2rem",
        backgroundImage: `url(${whiteBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Cluster />
      <div
        className="flex-column"
        style={{ gap: "2rem", justifyContent: "center", padding: "1rem" }}
      >
        <h3 className="heading-style-h2 text-green">
          Experience A Hochstetler Log Home Getaway
        </h3>
        <p className="text-size-regular">
          What's it like to wake up in the warmth and beauty of a custom log
          home. Stay in one of our client-built rentals and enjoy the comfort,
          quality, and charm that could be yours.
        </p>
        <div>
          <ButtonPrimary
            text={"Stay in Hochstetler Log Home"}
            to={"/rentals"}
          />
        </div>
      </div>
    </div>
  );
};

export default RentalsPitch;
