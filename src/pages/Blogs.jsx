import React from "react";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import floorPlan1 from "../assets/floor-plan-1.jpg";
const BlogCard = ({ src, to, title, description }) => {
  const navigate = useNavigate();
  return (
    <div className="fp" onClick={() => navigate(to)}>
      <div className="fp-img-box">
        <img
          src={src}
          alt="src "
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
        <h4 className="text-green">{title}</h4>
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
            <SearchInput title={"Search Here"} />
          </div>
        </div>
        <div
          className="grid"
          style={{
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <BlogCard
            title={"Tips For Lighting Your Log Home"}
            description={
              "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency"
            }
            src={floorPlan1}
          />
          <BlogCard
            title={"Are Log Homes Drafty? Here's What The Tests Say."}
            description={
              "A recent air infiltration test proved that a Hochstetler Log Home exceeded energy efficiency standards—here’s how"
            }
            src={floorPlan1}
          />

          <BlogCard
            src={floorPlan1}
            title={"Tips For Lighting Your Log Home"}
            description={
              "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency"
            }
          />
          <BlogCard
            src={floorPlan1}
            title={"Tips For Lighting Your Log Home"}
            description={
              "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency"
            }
          />
          <BlogCard
            src={floorPlan1}
            title={"Tips For Lighting Your Log Home"}
            description={
              "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency"
            }
          />
          <BlogCard
            src={floorPlan1}
            title={"Tips For Lighting Your Log Home"}
            description={
              "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency"
            }
          />
          <BlogCard
            src={floorPlan1}
            title={"Tips For Lighting Your Log Home"}
            description={
              "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency"
            }
          />
          <BlogCard
            src={floorPlan1}
            title={"Tips For Lighting Your Log Home"}
            description={
              "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency"
            }
          />
          <BlogCard
            src={floorPlan1}
            title={"Tips For Lighting Your Log Home"}
            description={
              "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency"
            }
          />
          <BlogCard
            src={floorPlan1}
            title={"Tips For Lighting Your Log Home"}
            description={
              "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
