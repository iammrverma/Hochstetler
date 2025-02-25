import React from "react";

const SearchInput = ({ styles, title }) => {
  return (
    <div
      className="inputBox flex"
      style={{
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: "1px 1px 3px",
        borderColor:
          "var(--base-color-neutral--neutral-lighter) var(--base-color-neutral--neutral-lighter) #dfdfdf",
        borderRadius: "var(--radius--radius-small)",
        minHeight: "3.5rem",
        marginBottom: "0",
        width: "100%",
        padding: "1rem 1.5rem ",
        backgroundColor: "var(--base-color-neutral--white)",
        outline: "none",
        fontSize: "1.125rem",
        ...styles,
      }}
    >
      <div className="text-green">
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      <input
        type="text"
        placeholder={title}
        style={{
          outline: "none",
          border: "none",
          backgroundColor: "inherit",
          flex: "1",
          color: "black",
          padding: ".5rem ",
        }}
      />
    </div>
  );
};

export default SearchInput;
