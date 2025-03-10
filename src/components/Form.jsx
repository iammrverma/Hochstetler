import React from "react";
import Input from "../components/Input";
import { useWindowSize } from "../contexts/WindowSizeContext";
import ButtonPrimary from "./buttons/ButtonPrimary";
const Form = ({ title, styles }) => {
  const { width } = useWindowSize();
  const large = width > 1080;
  return (
    <div
      id="form"
      name="form"
      className="form background-white flex-column"
      style={{
        boxShadow: "0 2px 20px 10px #00000014,0 2px 8px 4px #0000001a",
        borderRadius: large ? "var(--radius--radius-med)" : "",
        padding: large ? "2rem" : "2rem 1rem",
        gap: "2rem",
        ...styles,
      }}
    >
      <h4 className="text-green heading-style-h3">{title}</h4>
      <div className="grid-2-1" style={{ gap: "1rem", padding: "0" }}>
        <div className="flex-column">
          <div className="text-medium">
            <p>First Name</p>
            <Input type="text" placeholder="First Name" />
          </div>
        </div>
        <div className="flex-column">
          <div className="text-medium">
            <p>Last Name</p>
            <Input type="text" placeholder="Last Name" />
          </div>
        </div>
      </div>
      <div className="grid-2-1" style={{ gap: "1rem", padding: "0" }}>
        <div className="flex-column" style={{ alignItems: "flex-start" }}>
          <p>Email Address</p>
          <Input type="email" placeholder="exaple@mail.com" />
        </div>
        <div className="flex-column" style={{ alignItems: "flex-start" }}>
          <p>Number</p>
          <Input type="Number" placeholder="(111) 222 333" />
        </div>
      </div>
      <div className="flex-column">
        <p>Street Address</p>
        <Input type="text " placeholder="Block Number, eg 123/2" />
      </div>
      <div className="grid-2-1" style={{ gap: "1rem", padding: "0" }}>
        <div className="flex-column">
          <p>State</p>
          <Input type="text " placeholder="State" />
        </div>
        <div className="flex-column">
          <p>Zip Code</p>
          <Input type="text " placeholder="Zip Code" />
        </div>
      </div>
      <div className="flex-column">
        <p>Your Message</p>
        <textarea
          className="text-dark"
          type="textarea"
          name=""
          id=""
          rows={10}
          style={{
            flex: "1",
            outline: "none",
            border: "1px solid #000",
            borderRadius: "var(--radius--radius-small)",
            minHeight: "2.75rem",
            padding: ".5rem .875rem",
            fontFamily: "quincy-cf, sans-serif",
            fontSize: "1rem",
            lineHeight: "1.5",
            transition: "all 0.3s",
            boxShadow: "0 1px 2px #1018280d",
            backgroundColor: "var(--untitled-ui-white)",
            outline: "none",
          }}
          placeholder="Tell us about your build location, features for your build, materials, etc. We are happy to answer your questions!"
        ></textarea>
      </div>
      <ButtonPrimary text={"Send Message"} />
    </div>
  );
};

export default Form;
