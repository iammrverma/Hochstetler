import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import { blogs } from "../../public/data";
import { capitalize } from "../util";

const BlogCard = ({ title, description }) => {
  const navigate = useNavigate();
  const src = `/Hochstetler/blogs/${title.replace(/ /g, "_")}.jpg`; // adding hochstetler here is important
  const to = `./${title.replace(/ /g, "_")}`;
  const capTitle = capitalize(title);
  return (
    <div className="fp" onClick={() => navigate(to)}>
      <div className="fp-img-box">
        <img
          src={src}
          alt={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="flex-column"
        style={{ alignItems: "flex-start", padding: "1rem", gap: "1.5rem" }}
      >
        <h4 className="text-green">{capTitle}</h4>
        <p className="text-green">{description}</p>
      </div>

      <ButtonPrimary
        text={"View Floor Plan"}
        rightArrow
        varient={"grey"}
        styles={{ width: "95%", margin: "auto" }}
      />
    </div>
  );
};
const Blogs = () => {
  const [value, setValue] = useState("");
  const filteredBlogs = value
    ? blogs.filter(
        (blog) =>
          blog.title.includes(value.toLowerCase()) ||
          blog.description.toLowerCase().includes(value.toLowerCase()) 
      )
    : blogs;

  return (
    <div>
      <Header title={"Log Home Resources"} className={"background-light"} />
      <div className="flex-column" style={{ gap: "2rem", padding: "3rem" }}>
        <div
          className="flex "
          style={{
            gap: "1rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <h3 className="text-green" style={{ fontSize: "3rem" }}>
            Helpful insights from log home experts
          </h3>
          <div>
            <SearchInput
              title={"Search Here"}
              value={value}
              setValue={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div
          className="grid"
          style={{
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {filteredBlogs.map((blog) => (
            <BlogCard title={blog.title} description={blog.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
