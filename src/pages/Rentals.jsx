import React from "react";
import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import headerBg from "../assets/header-bg.png";
import { useWindowSize } from "../contexts/WindowSizeContext";
import image from "../assets/testimonial-image.jpg";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
const RentalsCard = ({
  src,
  title,
  location,
  description,
  to,
  large,
  reverse,
}) => {
  return (
    <div
      className="flex"
      style={{
        ...(large
          ? {
              borderRadius: "var(--radius--radius-large)",
              overflow: "hidden",
              flexDirection: reverse ? "row-reverse" : "row",
              backgroundColor:
                "var(--base-color-hochstetler-brand--hlh-beige-light)",
            }
          : {
              flexDirection: "column",
            }),
      }}
    >
      <div style={{ flex: "1" }}>
        <img
          src={src}
          alt={src}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className="flex-center"
        style={{
          flex: "1",
        }}
      >
        <div
          className="flex-column"
          style={{
            gap: "1rem",
            padding: "2rem",
            // ...(large ? { alignItems: "flex-start", padding: "2rem" } : {}),
          }}
        >
          <h3 className="text-green">{title}</h3>
          <h4 className="text-red-accent">{location}</h4>
          <p style={{ paddingBottom: "1rem" }}>{description}</p>
          <ButtonPrimary text={"Visit Listing"} to={to} />
        </div>
      </div>
    </div>
  );
};
const Rentals = () => {
  const { width } = useWindowSize();
  const large = width > 1080;
  return (
    <div className="flex-column " style={{ gap: "2rem", alignItems: "center" }}>
      <Header
        className={"background-beige-light"}
        backgroundImage={headerBg}
        styles={{ padding: large ? "4rem" : "3rem", width: "100%" }}
      >
        <Hero2
          style={{ padding: "0" }}
          heading={{ main: "Live The", span: "Log Home Lifestyle" }}
          smallheading={"Experience Hochstetler"}
        >
          <p className="text-dark">
            Wondering what it feels like to wake up surrounded by the warmth and
            character of a Hochstetler log home? We understand the dream—and
            invite you to experience it firsthand.
          </p>
        </Hero2>
      </Header>
      <div style={{ padding: large ? "0 6rem" : "0 2rem", width: "100%" }}>
        <h3 className="text-green">Immerse yourself in peace and comfort.</h3>
        <p>
          There’s something about a log home that just feels right—like stepping
          into a place that’s meant to welcome you, ground you, and remind you
          of what really matters. Spend time in a rental log home built by our
          clients and experience living in a space shaped by nature. Notice the
          solid construction and see how the thoughtful design supports the
          rhythms of daily life.
        </p>
      </div>
      <img
        src={image}
        alt=""
        style={
          large
            ? {
                width: "90%",
                margin: "0 auto",
                borderRadius: "var(--radius--radius-med)",
              }
            : null
        }
      />
      <div
        className="flex-column"
        style={{
          gap: ".5rem",
          padding: "2rem",
          ...(large ? { width: "80%", alignItems: "flex-start" } : {}),
        }}
      >
        <h3 className="text-green">Great Escape Lodge at Deep Creek Lake</h3>

        <p className="text-red-accent" style={{ fontSize: "2rem" }}>
          Mc Henry Md
        </p>
        <p style={{ maxWidth: "100%", paddingBottom: "1rem" }}>
          Discover the exceptional craftsmanship of our builds by staying at the
          luxurious Great Escape Lodge. Nestled in the serene beauty of Deep
          Creek Lake in McHenry, MD, this Hochstetler log home offers the
          perfect blend of rustic charm and modern comfort.
        </p>
        <ButtonPrimary text={"Visit Listing"} />
      </div>
      <div
        className="flex-column"
        style={{ gap: "2rem", padding: large ? "2rem" : "" }}
      >
        <RentalsCard
          src={image}
          title={"Blue Moon"}
          location={"Hocking Hills, Oh"}
          description={
            "The Blue Moon Cabin is a cozy, contemporary log cabin designed exclusively for couples seeking a romantic escape in Hocking Hills. Perfect for honeymoons or anniversaries, it features a private king bedroom, a full bath with a tile shower, and indoor and outdoor wood-burning fireplaces. Enjoy the private hot tub, fully equipped kitchen with granite countertops, and luxurious amenities like complimentary WiFi, satellite TV, and plush bathrobes for a truly relaxing retreat."
          }
          to={"#"}
          large={large}
          reverse
        />
        <RentalsCard
          src={image}
          title={"Blue Moon"}
          location={"Hocking Hills, Oh"}
          description={
            "The Blue Moon Cabin is a cozy, contemporary log cabin designed exclusively for couples seeking a romantic escape in Hocking Hills. Perfect for honeymoons or anniversaries, it features a private king bedroom, a full bath with a tile shower, and indoor and outdoor wood-burning fireplaces. Enjoy the private hot tub, fully equipped kitchen with granite countertops, and luxurious amenities like complimentary WiFi, satellite TV, and plush bathrobes for a truly relaxing retreat."
          }
          to={"#"}
          large={large}
        />
        <RentalsCard
          src={image}
          title={"Blue Moon"}
          location={"Hocking Hills, Oh"}
          description={
            "The Blue Moon Cabin is a cozy, contemporary log cabin designed exclusively for couples seeking a romantic escape in Hocking Hills. Perfect for honeymoons or anniversaries, it features a private king bedroom, a full bath with a tile shower, and indoor and outdoor wood-burning fireplaces. Enjoy the private hot tub, fully equipped kitchen with granite countertops, and luxurious amenities like complimentary WiFi, satellite TV, and plush bathrobes for a truly relaxing retreat."
          }
          to={"#"}
          large={large}
          reverse
        />
        <RentalsCard
          src={image}
          title={"Blue Moon"}
          location={"Hocking Hills, Oh"}
          description={
            "The Blue Moon Cabin is a cozy, contemporary log cabin designed exclusively for couples seeking a romantic escape in Hocking Hills. Perfect for honeymoons or anniversaries, it features a private king bedroom, a full bath with a tile shower, and indoor and outdoor wood-burning fireplaces. Enjoy the private hot tub, fully equipped kitchen with granite countertops, and luxurious amenities like complimentary WiFi, satellite TV, and plush bathrobes for a truly relaxing retreat."
          }
          to={"#"}
          large={large}
        />
        <RentalsCard
          src={image}
          title={"Blue Moon"}
          location={"Hocking Hills, Oh"}
          description={
            "The Blue Moon Cabin is a cozy, contemporary log cabin designed exclusively for couples seeking a romantic escape in Hocking Hills. Perfect for honeymoons or anniversaries, it features a private king bedroom, a full bath with a tile shower, and indoor and outdoor wood-burning fireplaces. Enjoy the private hot tub, fully equipped kitchen with granite countertops, and luxurious amenities like complimentary WiFi, satellite TV, and plush bathrobes for a truly relaxing retreat."
          }
          to={"#"}
          large={large}
          reverse
        />
        <RentalsCard
          src={image}
          title={"Blue Moon"}
          location={"Hocking Hills, Oh"}
          description={
            "The Blue Moon Cabin is a cozy, contemporary log cabin designed exclusively for couples seeking a romantic escape in Hocking Hills. Perfect for honeymoons or anniversaries, it features a private king bedroom, a full bath with a tile shower, and indoor and outdoor wood-burning fireplaces. Enjoy the private hot tub, fully equipped kitchen with granite countertops, and luxurious amenities like complimentary WiFi, satellite TV, and plush bathrobes for a truly relaxing retreat."
          }
          to={"#"}
          large={large}
        />
        <RentalsCard
          src={image}
          title={"Blue Moon"}
          location={"Hocking Hills, Oh"}
          description={
            "The Blue Moon Cabin is a cozy, contemporary log cabin designed exclusively for couples seeking a romantic escape in Hocking Hills. Perfect for honeymoons or anniversaries, it features a private king bedroom, a full bath with a tile shower, and indoor and outdoor wood-burning fireplaces. Enjoy the private hot tub, fully equipped kitchen with granite countertops, and luxurious amenities like complimentary WiFi, satellite TV, and plush bathrobes for a truly relaxing retreat."
          }
          to={"#"}
          large={large}
          reverse
        />
        <RentalsCard
          src={image}
          title={"Blue Moon"}
          location={"Hocking Hills, Oh"}
          description={
            "The Blue Moon Cabin is a cozy, contemporary log cabin designed exclusively for couples seeking a romantic escape in Hocking Hills. Perfect for honeymoons or anniversaries, it features a private king bedroom, a full bath with a tile shower, and indoor and outdoor wood-burning fireplaces. Enjoy the private hot tub, fully equipped kitchen with granite countertops, and luxurious amenities like complimentary WiFi, satellite TV, and plush bathrobes for a truly relaxing retreat."
          }
          to={"#"}
          large={large}
        />
      </div>
    </div>
  );
};

export default Rentals;
