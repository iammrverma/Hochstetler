import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import { scrollTo } from "../util";

const q_topics = [
  {
    topic: "Log home cost",
    href: "log-home-cost",
    questions: [
      {
        q: "Does a log home cost more than a stick-built home?",
        a: "A basic log home with four walls and a conventional roof is comparable in cost to a stick-built home. However, log homes often feature elements like cathedral ceilings, exposed timbers, and high-quality finishes, which can increase the overall investment.",
      },
    ],
  },
  {
    topic: "Construction material",
    href: "construction-material",
    questions: [
      {
        q: "Does a log home cost more than a stick-built home?",
        a: "A basic log home with four walls and a conventional roof is comparable in cost to a stick-built home. However, log homes often feature elements like cathedral ceilings, exposed timbers, and high-quality finishes, which can increase the overall investment.",
      },
    ],
  },
  {
    topic: "Timeline",
    href: "timeline",
    questions: [
      {
        q: "Does a log home cost more than a stick-built home?",
        a: "A basic log home with four walls and a conventional roof is comparable in cost to a stick-built home. However, log homes often feature elements like cathedral ceilings, exposed timbers, and high-quality finishes, which can increase the overall investment.",
      },
    ],
  },
  {
    topic: "Design",
    href: "design",
    questions: [
      {
        q: "Does a log home cost more than a stick-built home?",
        a: "A basic log home with four walls and a conventional roof is comparable in cost to a stick-built home. However, log homes often feature elements like cathedral ceilings, exposed timbers, and high-quality finishes, which can increase the overall investment.",
      },
    ],
  },
];

const FAQs = () => {
  const [currentTopic, setCurrentTopic] = useState(null);
  const topicsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleTopic = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleTopic = entry.target.id;
          }
        });
        if (visibleTopic) setCurrentTopic(visibleTopic);
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.5,
      }
    );

    // Attach observer to all topics
    Object.values(topicsRef.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(topicsRef.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Header
        title={"Frequently Asked Questions"}
        className={"background-light"}
      />
      <div
        className="background-white grid-2-4-1"
        style={{ padding: "4rem 2rem", alignItems: "flex-start" }}
      >
        {/* Sidebar Navigation */}
        <div className="topics flex-column">
          <h4>Question Topics</h4>
          <ul className="flex-column" style={{ gap: ".5rem" }}>
            {q_topics.map(({ topic, href }) => (
              <li
                key={href}
                onClick={() => scrollTo(href)}
                className={`li_topic ${currentTopic === href ? "current" : ""}`}
              >
                <a href={`#${href}`}>{topic}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Questions Section */}
        <div
          className="flex-column"
          style={{ gap: "2rem", alignItems: "flex-start" }}
        >
          {q_topics.map(({ topic, href, questions }) => (
            <div key={href}>
              <h3
                className="text-green"
                ref={(el) => {
                  if (el) topicsRef.current[href] = el;
                }}
                id={href}
              >
                {topic}
              </h3>
              <div
                className="questions flex-column"
                style={{ paddingLeft: "4rem", gap: "1rem" }}
              >
                {questions.map(({ q, a }) => (
                  <div key={q}>
                    <div className="question text-green">
                      <h4>{q}</h4>
                    </div>
                    <p style={{ paddingLeft: "4rem" }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQs;
