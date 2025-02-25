import React from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";
import Input from "./Input";

const NewsLetterInput = ({ disablebutton = false }) => {
  return (
    <div
      className="flex"
      style={{
        backgroundColor: "var(--untitled-ui--white)",
        color: "var(--base-color-hochstetler-brand--hlh-green)",
        border: "1px #000",
        borderRadius: "var(--radius--radius-small)",
        height: "auto",
        minheight: "2.75rem",
        marginBottom: "0",
        padding: ".5rem .875rem",
        fontFamily: "quincy-cf, sans-serif",
        fontSize: "1rem",
        lineHeight: "1.5",
        transition: "all .3s",
        boxShadow: "0 1px 2px #1018280d",
        gap: "1rem",
      }}
    >
      <Input />

      {!disablebutton && (
        <ButtonPrimary
          text={"Subscribe"}
          styles={{ borderRadius: "var(--radius--radius-small)" }}
        />
      )}
    </div>
  );
};

export default NewsLetterInput;
