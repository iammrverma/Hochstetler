import React from 'react'

import rentalsImg from "../assets/rentalsImg.jpg";
import rentalsImg2 from "../assets/rentalsImg2.jpg";
import rentalsImg3 from "../assets/rentalsImg3.jpg";
import rentalsImg4 from "../assets/rentalsImg4.jpg";
import { useWindowSize } from "../contexts/WindowSizeContext";
const Cluster = () => {
  const { width } = useWindowSize();
  const large = width > 1080;
  return (
    
      <div className="flex-center" style={{ position: "relative" }}>
        <img
          src={rentalsImg}
          alt={rentalsImg}
          style={{
            width: `${large ? "50%" : "100%"}`,
            height: `${large ? "90%" : "100%"}`,
            objectFit: "cover",
            borderRadius: "var(--radius--radius-med)",
          }}
        />
        {large && (
          <img
            src={rentalsImg2}
            alt={rentalsImg2}
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
            src={rentalsImg3}
            alt={rentalsImg3}
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
            src={rentalsImg4}
            alt={rentalsImg4}
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
    
  )
}

export default Cluster
