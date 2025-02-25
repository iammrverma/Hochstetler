import React, { useState } from "react";

const Input = ({
  value = "",
  setValue = () => {},
  type = "email",
  placeholder = "Enter Email",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
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
  );
};

export default Input;
