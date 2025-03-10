import React from "react";

import rentalsImg from "../assets/rentalsImg.jpg";
import rentalsImg2 from "../assets/rentalsImg2.jpg";
import rentalsImg3 from "../assets/rentalsImg3.jpg";
import rentalsImg4 from "../assets/rentalsImg4.jpg";
import { useWindowSize } from "../contexts/WindowSizeContext";
const Cluster = ({
  img0 = rentalsImg,
  img1 = rentalsImg2,
  img2 = rentalsImg3,
  img3 = rentalsImg4,
}) => {
  const { width } = useWindowSize();
  const large = width > 1080;
  return (
    <div className="flex-center" style={{ position: "relative" }}>
      <img
        src={img0}
        alt={img0}
        style={{
          width: `${large ? "50%" : "100%"}`,
          height: `${large ? "90%" : "100%"}`,
          objectFit: "cover",
          borderRadius: "var(--radius--radius-med)",
        }}
      />
      {large && (
        <img
          src={img1}
          alt={img1}
          style={{
            display: `${large ? "block" : "none"}`,
            position: "absolute",
            zIndex: "1",
            width: "35%",
            height: "60%",
            objectFit: "cover",
            borderRadius: "var(--radius--radius-med)",
            top: "10%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {large && (
        <img
          src={img2}
          alt={img2}
          style={{
            display: `${large ? "block" : "none"}`,
            position: "absolute",
            zIndex: "1",
            width: "40%",
            height: "30%",
            objectFit: "cover",
            borderRadius: "var(--radius--radius-med)",

            top: "90%",
            left: "30%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      {large && (
        <img
          src={img3}
          alt={img3}
          style={{
            display: `${large ? "block" : "none"}`,
            position: "absolute",
            zIndex: "1",
            width: "40%",
            height: "30%",
            objectFit: "cover",
            borderRadius: "var(--radius--radius-med)",
            top: "60%",
            left: "80%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
};

export default Cluster;
