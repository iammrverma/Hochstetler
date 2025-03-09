import React from "react";
import { useWindowSize } from "../contexts/WindowSizeContext";
import { useNavigate } from "react-router-dom";

export const Top = ({ m_no }) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const large = width > 1080;

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <nav
      className="top-bar background-green text-white flex"
      style={{
        justifyContent: large ? "space-between" : "center",
        alignItems: "center",
        padding: ".5rem 2rem",
      }}
    >
      {/* Newsletter Subscription */}
      <button
        className="text-white"
        onClick={handleScrollToBottom}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          outline: "none",
        }}
      >
        Subscribe to Our Newsletter{" "}
        <i className="fa-solid fa-arrow-right" style={{ color: "inherit" }}></i>
      </button>

      {large && (
        <div className="flex-center text-white" style={{ gap: ".5rem" }}>
          {/* Navigation Links */}
          <div
            className="text-white"
            role="button"
            tabIndex="0"
            onClick={() => navigate("/difference")}
            style={{ cursor: "pointer" }}
          >
            Log Home Packages
          </div>
          <div
            className="text-white"
            role="button"
            tabIndex="0"
            onClick={() => navigate("/contact")}
            style={{
              borderRight:
                "2px solid var(--base-color-hochstetler-brand--hlh-green-accent)",
              paddingRight: ".5rem",
              cursor: "pointer",
            }}
          >
            Contact us
          </div>

          {/* Call to Action */}
          {m_no && (
            <a href={`tel:${m_no}`} className="text-white">
              Call us: {m_no}
            </a>
          )}
        </div>
      )}
    </nav>
  );
};

export const Bottom = () => {
  return (
    <footer
      className="text-white flex-center"
      style={{ padding: "0.5rem", backgroundColor: "#464b14" }}
    >
      © {new Date().getFullYear()} Hochstetler Log Homes - All rights reserved
    </footer>
  );
};
