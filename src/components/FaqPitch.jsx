import React from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../contexts/WindowSizeContext";

const Question = ({ q, to }) => {
  const navigate = useNavigate();
  return (
    <div className="flex q" onClick={() => navigate(to)}>
      <h4>{q}</h4>
      <div
        style={{
          borderRadius: "var(--radius--radius-med)",
          backgroundColor:
            "var(--base-color-hochstetler-brand--hlh-green-light)",
          padding: "12px 24px",
          position: "relative",
        }}
      >
        <i className="fa-solid fa-arrow-right text-white"></i>
      </div>
    </div>
  );
};
const FaqPitch = () => {
  const { width } = useWindowSize();
  const large = width > 1080;
  const questions = [
    { q: "How much does a Hochstetler log home cost?", to: "" },
    { q: "Are log home energy effecient", to: "" },
    { q: `Should i go with 6"or  8" log`, to: "" },
  ];
  return (
    <div
      className="grid-2-4-1 background-light"
      style={{ padding: `${large ? "6rem" : "6rem 2rem"}`, gap: "2rem" }}
    >
      <div className="flex-column" style={{ gap: "2rem" }}>
        <h3 className="text-green">Answers to your log home questions</h3>
        <p className="text-size-med">
          Get helpful tips and expert advice on all things log homes. From
          planning and building to embracing the log home lifestyle, we're here
          to guide you.
        </p>
        <div>
          <ButtonPrimary text={"See our FAQ"} to={"/faqs"} />
        </div>
      </div>
      <div
        className="flex-center"
        style={{ width: `${large ? "80%" : "100%"}`, margin: "0 auto" }}
      >
        <div className="flex-column" style={{ gap: "2rem", width: "100%" }}>
          {questions.map((q, ind) => (
            <Question q={q.q} to={q.to} key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPitch;
