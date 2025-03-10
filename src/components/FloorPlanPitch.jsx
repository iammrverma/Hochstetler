import React, { useRef } from "react";
import Hero2 from "./Hero2";
import ButtonPrimary from "./buttons/ButtonPrimary";
import VerticalList from "./VerticalList";
import FloorPlanCard, { FloorPlanCardMinimal } from "./FloorPlanCard";
import { useWindowSize } from "../contexts/WindowSizeContext";
import { floorPlans } from "../../public/data";
import { Link } from "react-router-dom";
const FloorPlanPitch = () => {
  const { width } = useWindowSize();
  const large = width > 1080;
  const firstListRef = useRef(null);
  const secondListRef = useRef(null);

  const handleScroll = (e) => {
    const scrollDelta = e.deltaY;

    const firstList = firstListRef.current;
    const secondList = secondListRef.current;

    if (!firstList || !secondList) return;

    // Check if the first list can scroll further
    const firstScrollableDown =
      firstList.scrollTop + firstList.clientHeight < firstList.scrollHeight;
    const firstScrollableUp = firstList.scrollTop > 0;

    // Check if the second list can scroll further
    const secondScrollableDown =
      secondList.scrollTop + secondList.clientHeight < secondList.scrollHeight;
    const secondScrollableUp = secondList.scrollTop > 0;

    // Handle scrolling logic
    if (scrollDelta > 0) {
      // Scrolling down
      if (firstScrollableDown) {
        firstList.scrollTop += scrollDelta;
      } else if (secondScrollableDown) {
        secondList.scrollTop += scrollDelta;
      }
    } else {
      // Scrolling up
      if (secondScrollableUp) {
        secondList.scrollTop += scrollDelta;
      } else if (firstScrollableUp) {
        firstList.scrollTop += scrollDelta;
      }
    }
  };

  return (
    <div
      className="grid-2-1 background-beige-light"
      style={{
        height: large ? "150vh" : "auto",
        overflow: "visible",
      }}
      onWheel={handleScroll} // Listen to the scroll event on the parent container
    >
      <div
        className="flex-column"
        style={{
          gap: "1rem",

          padding: "6rem 3rem",
        }}
      >
        <Hero2
          heading={{ main: "Find Your Ideal", span: "Floor Plan" }}
          style={{ padding: "0" }}
        >
          <p>
            Step into a space crafted just for you. Explore customizable log
            home floor plans with every detail thoughtfully designed for
            connection and comfort.
          </p>
          <p>
            Already have a floor plan?{" "}
            <Link className="link" to="/contact">
              Bring us your ideas
            </Link>{" "}
            and our team of designers can help you make your custom log home a
            reality.
          </p>
        </Hero2>

        {large && (
          <div>
            <ButtonPrimary
              text={"View Floor Plans"}
              to={"/floor-plans"}
              varient="green"
            />
          </div>
        )}
      </div>

      <div
        style={{
          overflow: "hidden",
          height: "100%",
          display: "flex",
          gap: "2rem",
          ...(!large && { flexDirection: "column" }),
        }}
      >
        {large ? (
          <>
            <div
              className="no-scrollbar"
              ref={firstListRef}
              style={{
                height: "100%",
                overflowY: "auto",
                flex: 1,
                padding: "0.5rem",
              }}
            >
              <VerticalList list={floorPlans.slice(0, floorPlans.length / 2)}>
                {(data) => <FloorPlanCardMinimal title={data.title} />}
              </VerticalList>
            </div>

            <div
              className="no-scrollbar"
              ref={secondListRef}
              style={{
                height: "100%",
                overflowY: "auto",
                flex: 1,
                padding: "0.5rem",
              }}
            >
              <VerticalList
                list={floorPlans.slice(floorPlans.length / 2)}
                styles={{ paddingTop: "5rem" }}
              >
                {(data) => <FloorPlanCardMinimal title={data.title} />}
              </VerticalList>
            </div>
          </>
        ) : (
          <>
            <div
              className="no-scrollbar"
              ref={firstListRef}
              style={{
                overflowY: "auto",
                flex: 1,
                padding: "0.5rem",
              }}
            >
              <VerticalList list={floorPlans.slice(0, 5)}>
                {(data) => <FloorPlanCard plan={data} />}
              </VerticalList>
            </div>
            <ButtonPrimary
              text={"View All Floor Plans"}
              to={"/floor-plans"}
              varient="green"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FloorPlanPitch;
