import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { convertToTitle } from "../util";
import Header from "../components/Header";
import headerBg from "../assets/header-bg.png";
import { blogs } from "../../public/data";
import CopySvg from "../components/svgs/CopySvg";
import { BlogCard } from "./Blogs";

const SubNav = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-subnav">
      <div className="blog-subnav-wrap flex">
        <div onClick={() => navigate(-1)}>
          <div className="blog-back-arrow flex">
            <i className="fa-solid fa-arrow-left"></i>
            <div className="link">Back to Articles</div>
          </div>
        </div>
        <div className="blog-subnav-title">{title}</div>
      </div>
    </div>
  );
};
const BlogDetail = () => {
  const { name } = useParams();
  const title = convertToTitle(name);
  const src = `/Hochstetler/blogs/${name}.jpg`; // adding hochstetler here is important
  const blog = blogs.find((blog) => blog.title === title.toLowerCase());

  const { description, read, author, sections, suggetions } = blog;
  const [showCopied, setShowCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard
      .writeText(window.location.href) // Copy current URL
      .then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 1000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };
  return (
    <>
      <SubNav title={title} />
      <Header image={src} backgroundImage={headerBg}>
        <div className="blog-head-wrapper text-dark">
          <div className="container-large">
            <div className="project-header-padding flex-center">
              <div className="post-heading-wrapper">
                <div className="blog-heading-wrapper flex-column">
                  <h1 className="heading-style-h2 text-green">{title}</h1>
                  <div className="text-size-medium">{description}</div>
                  <div className="spacer-medium"></div>
                  <div className="blog-info">
                    <div className="read-time uui-text-size-medium-3">
                      {`${read} min read`}
                    </div>
                    <div className="blog-share-buttons">
                      <div
                        className="uui-button-secondary-gray-5 is-button-small icon-only"
                        onClick={handleClick}
                      >
                        <div className="uui-button-icon-3">
                          <CopySvg />
                          <div
                            className={`copy-tooltip ${
                              showCopied ? "active" : ""
                            }`}
                          >
                            Copied!
                          </div>
                        </div>
                      </div>
                      <div className="uui-button-secondary-gray-5 is-button-small icon-only">
                        <div className="uui-button-icon-3">
                          <i className="fa-brands fa-twitter"></i>
                        </div>
                      </div>
                      <div className="uui-button-secondary-gray-5 is-button-small icon-only">
                        <div className="uui-button-icon-3">
                          <i className="fa-brands fa-facebook"></i>
                        </div>
                      </div>
                      <div className="uui-button-secondary-gray-5 is-button-small icon-only">
                        <div className="uui-button-icon-3">
                          <i className="fa-brands fa-linkedin"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>

      <div className="blog-content">
        <div className="blog-content-wrapper">
          <div className="project-header-padding">
            <div className="blog-head-wrapper">
              <div className="blog-rich-text ">
                {sections?.map((section, si) => (
                  <div
                    className="flex-column"
                    style={{ gap: "1rem", marginTop: "1rem" }}
                    key={`section-${si}`}
                  >
                    {section.heading && (
                      <h3 className="heading-style-h4 text-green-light">
                        {section.heading}
                      </h3>
                    )}
                    {si === 0 && author && (
                      <p style={{ fontWeight: "600" }}>{author}</p>
                    )}
                    {section.paras?.map((p, pi) => (
                      <p key={`section-${si}-${pi}`}>{p}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {suggetions && (
              <>
                <div className="heading-style-h2 text-green">More Articles</div>
                <div className="spacer-medium"></div>
                <div
                  className="grid"
                  style={{
                    gap: "2rem",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  }}
                >
                  {suggetions.map((s) => (
                    <BlogCard key={s} title={s} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
