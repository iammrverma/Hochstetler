import React, { Children } from "react";
import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import Cluster from "../components/Cluster";
import headerBg from "../assets/header-bg.png";
import { useWindowSize } from "../contexts/WindowSizeContext";
import lcd from "../assets/lcd.jpg";
import FloorPlanPitch from "../components/FloorPlanPitch";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
const Card = ({ styles, reverse, children, src }) => {
  const { width } = useWindowSize();
  const large = width > 1080;
  const Img = () => (
    <div className="content-image-wrapper">
      <img src={src} alt={src} />
    </div>
  );
  return (
    <div className="flex-center" style={{ ...styles }}>
      <div className="uui-section-layout04">
        <div className="uui_page-padding-8">
          <div className="uui-padding-vertical-xhuge-8">
            <div className="content-grid grid-2-1" style={{ gap: "4rem" }}>
              {large && reverse ? (
                <>
                  {children} <Img />
                </>
              ) : (
                <>
                  <Img /> {children}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const LogCabinDays = () => {
  const { width } = useWindowSize();
  const large = width > 1080;
  return (
    <div>
      <Header backgroundImage={headerBg} styles={{ padding: "0" }}>
        <div
          className={`grid-2-1 ${large ? "min-h-full" : ""}`}
          style={{ padding: "6rem 2rem", gap: "1rem" }}
        >
          <div className="heading-style-h1 display text-green text-center">
            Log Cabin <span className="text-green-accent">Days</span>
          </div>
          {large && <Cluster styles={{ height: "100%" }} />}
        </div>
      </Header>
      <div className="lcd-info-banner">
        <div className="banner-wrapper">
          <div className="heading-style-h3 text-green-accent">
            2025 Event Date
          </div>
          <div className="heading-style-h3 text-beige-light">
            Sep 12-13, 2025
          </div>
        </div>
      </div>
      <div className="uui-page-padding-8">
        <div className="hlh-content-container">
          <div className="side-padding-condensed">
            <div className="uui-padding-vertical-xhuge-2">
              <div className="uui-layout82_component">
                <div className="uui-layout82-content">
                  <div className="heading-style-h2 text-green">
                    Explore, Learn, and Celebrate The Log Home Lifestyle
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-medium">
                    Log Cabin Days is a vibrant celebration of log home living,
                    featuring family fun, live demonstrations, and educational
                    workshops that bring the tradition to life. From informative
                    sessions to fun activities, there's something for everyone
                    to enjoy.
                  </div>
                  <div className="uui-space-medium-3"></div>
                </div>
                <div
                  className="grid-2-1"
                  style={{
                    padding: "0",
                    gap: "3rem 2rem",
                  }}
                >
                  <div className="flex-column">
                    <img className="content-image-small" src={lcd} alt={lcd} />
                    <div className="flex-column" style={{ flex: "1" }}>
                      <div className="uui-space-small-5"></div>
                      <div className="uui-heading-xxsmall-2">
                        Fun for the Whole Family
                      </div>
                      <div className="uui-space-xxsmall"></div>
                      <div className="text-size-regular">
                        Enjoy a day filled with activities for all ages in our
                        Kids Zone, featuring a petting zoo, covered wagon rides,
                        maze through the woods, treasure hunts in the shavings,
                        stacking Lincoln Logs, and coloring contests.
                      </div>
                    </div>
                  </div>

                  <div className="flex-column">
                    <img className="content-image-small" src={lcd} alt={lcd} />
                    <div className="uui-space-small-5"></div>
                    <div className="uui-heading-xxsmall-2">
                      Authentic Amish Cuisine
                    </div>
                    <div className="uui-space-xxsmall"></div>
                    <div className="text-size-regular">
                      Delight in a variety of Amish-cooked specialties,
                      including barbecued chicken, log cabin burgers, soft
                      pretzels, open-kettle baked beans, and an assortment of
                      delicious treats – fry-pies, apple cider, apple butter,
                      popcorn, and homemade ice cream!
                    </div>
                  </div>
                  <div className="flex-column">
                    {" "}
                    <img className="content-image-small" src={lcd} alt={lcd} />
                    <div className="uui-space-small-5"></div>
                    <div className="uui-heading-xxsmall-2">
                      Rustic Furniture & Decor
                    </div>
                    <div className="uui-space-xxsmall"></div>
                    <div className="text-size-regular">
                      Visit the largest gathering of rustic furniture and home
                      décor providers in North America. Explore a wide variety
                      of exhibitors showcasing bedroom suites, tables, chairs,
                      home décor items, as well as windows, doors, roof
                      coverings, stain, and flooring.
                    </div>
                  </div>
                  <div className="flex-column">
                    <img className="content-image-small" src={lcd} alt={lcd} />

                    <div className="uui-space-small-5"></div>
                    <div className="uui-heading-xxsmall-2">
                      Artisan Demonstrations
                    </div>
                    <div className="uui-space-xxsmall"></div>
                    <div className="text-size-regular">
                      Experience hands-on learning with live demonstrations such
                      as wool-spinning, candle-making, wooden bowl turning,
                      steam engine sawmilling, hand-peeling, hand-hewing, and
                      exciting lumberjack activities.
                    </div>
                  </div>
                  <div className="flex-column">
                    <img className="content-image-small" src={lcd} alt={lcd} />

                    <div className="uui-space-small-5"></div>
                    <div className="uui-heading-xxsmall-2">
                      Helpful Educational Workshops
                    </div>
                    <div className="uui-space-xxsmall"></div>
                    <div className="text-size-regular">
                      Learn about log home planning, design, and construction
                      with expert insights and practical tips to help you
                      navigate your log home journey with confidence.
                    </div>
                  </div>
                  <div className="flex-column">
                    <img className="content-image-small" src={lcd} alt={lcd} />

                    <div className="uui-space-small-5"></div>
                    <div className="uui-heading-xxsmall-2">
                      Homesteading Techniques
                    </div>
                    <div className="uui-space-xxsmall"></div>
                    <div className="text-size-regular">
                      Learn the essentials of homesteading through workshops,
                      including gardening, raising chickens, and sustainable
                      living practices. Take a ride with a Belgian horse drawn
                      hay wagon and learn how to manage your woodland.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card
        src={lcd}
        styles={{
          backgroundColor:
            "var(--base-color-hochstetler-brand--hlh-beige-light)",
        }}
      >
        <div className="uui-layout04_content">
          <div className="heading-style-h2 text-green">Log Home Academy</div>
          <div className="uui-space-xsmall-3"></div>
          <div className="text-size-regular">
            Looking to gain a deeper understanding of building your own log
            home? The Log Home Academy at Log Cabin Days offers expert guidance
            and practical solutions to help you overcome challenges and turn
            your dream log home into reality.
          </div>
          <div className="spacer-medium"></div>
          <ButtonPrimary varient="green" text={"Learn More"} />
        </div>
      </Card>
      <Card reverse src={lcd}>
        <div className="flex-center">
          <Hero2
            style={{ padding: "0" }}
            heading={{ main: "Log Home ", span: "Driving Tour" }}
            description={`Take advantage of the rare opportunity to tour beautifully furnished log homes within an hour’s drive, showcasing exceptional design and quality.\nTo participate, simply register for the car tour and pick up your map at the information booth upon arrival. A suggested donation supports the American Cancer Society and Mohican Parochial School.`}
          />
        </div>
      </Card>
      <Card src={lcd}>
        <div className="flex-center">
          <Hero2
            style={{ padding: "0" }}
            heading={{ main: "Cabin and Rustic Furnishings ", span: "Auction" }}
            description={`Experience the charm of rustic living at our live Cabin and Rustic Furnishings Auction. Bid on stunning cabins and pavilions, along with a curated selection of rustic furniture, bedroom suites, coffee tables, dining sets, chairs, and unique home décor.`}
          />
        </div>
      </Card>
      <FloorPlanPitch />
    </div>
  );
};

export default LogCabinDays;
