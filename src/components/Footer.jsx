import React, { useState } from "react";
import "../styles/Footer.css";
import footerLogo from "../assets/footerImg.png";
import NewsLetterInput from "./NewsLetterInput";

const FooterNavlist = ({ heading, navlist }) => {
  return (
    <>
      <div className="flex-column">
        <div className="footer-list-heading">{heading}</div>
        {navlist.map((item) => (
          <a className="uui-footer02_link" key={item.lable} href={item.to}>
            {item.lable}
          </a>
        ))}
      </div>
    </>
  );
};

const Footer = () => {
  const [value, setValue] = useState("");
  return (
    <div className="footer background-green">
      <div className="footer-right">
        <div className="flex-column" style={{ gap: "2rem" }}>
          <FooterNavlist
            heading="Floor Plans"
            navlist={[
              {
                lable: "See All Plans",
                to: "#",
              },
            ]}
          />
          <FooterNavlist
            heading={"Inspiration"}
            navlist={[
              {
                lable: "Gallery",
                to: "#",
              },
              {
                lable: "360 tours",
                to: "#",
              },
            ]}
          />
        </div>

        <FooterNavlist
          heading={"Resources"}
          navlist={[
            {
              lable: "Knowledge Base",
              to: "#",
            },
            {
              lable: "FAQs",
              to: "#",
            },
            {
              lable: "Testimonials",
              to: "#",
            },
            {
              lable: "Pricing",
              to: "#",
            },
            {
              lable: "The log home Academy",
              to: "#",
            },
          ]}
        />
        <FooterNavlist
          heading={"Experience"}
          navlist={[
            {
              lable: "Log cabin days",
              to: "#",
            },
            {
              lable: "Rent a log home",
              to: "#",
            },
          ]}
        />
        <FooterNavlist
          heading={"Company"}
          navlist={[
            {
              lable: "The Hochstetler difference",
              to: "#",
            },
            {
              lable: "Speciality Structures",
              to: "#",
            },
            {
              lable: "Commercial Service",
              to: "#",
            },
            {
              lable: "Contact us",
              to: "#",
            },
            {
              lable: "Privacy Policy",
              to: "#",
            },
          ]}
        />
      </div>

      <div
        className="flex-column"
        style={{
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            gap: "1rem",
          }}
        >
          <a style={{ maxWidth: "100%", display: "inline-block" }}>
            <img className="footer_logo" src={footerLogo} />
          </a>
          <div>
            <strong>
              Hochstetler Log Homes
              <br />
            </strong>
            552 State Route 95 <br /> Loudonville, OH 44842 <br />
            800.365.1015
          </div>
        </div>

        <div className="green-divider"></div>

        <div className="footer-list-heading ">Receive Our News Letter</div>

        <p>
          Subscribe to our newsletter for monthly highlights and expert advice
          from our team
        </p>

        <NewsLetterInput value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default Footer;
