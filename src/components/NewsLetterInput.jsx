import React, { useState } from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";

const NewsLetterInput = ({ value = "", setValue = () => {} }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
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
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Your Email"
        onFocus={handleFocus}
        onBlur={handleBlur}
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
          color: "var(--base-color-hochstetler-brand--hlh-green)",
          borderColor: isFocused
            ? "var(--base-color-hochstetler-brand--hlh-green-accent)"
            : "var(--untitled-ui--white)",
          boxShadow: isFocused
            ? "0 1px 2px #1018280d, 0 0 0 4px #b1b3474d"
            : "0 1px 2px #1018280d",
          color: isFocused
            ? "var(--untitled-ui--gray900)"
            : "var(--base-color-hochstetler-brand--hlh-green)",
        }}
      />

      <ButtonPrimary
        text={"Subscribe"}
        styles={{ borderRadius: "var(--radius--radius-small)" }}
      />
    </div>
  );
};

export default NewsLetterInput;
