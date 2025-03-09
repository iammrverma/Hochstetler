import React from "react";
import Header from "../components/Header";
import headerBg from "../assets/header-bg.png";
import Hero2 from "../components/Hero2";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import lhp0 from "../assets/lhp0.jpg";
import lhp1 from "../assets/lhp1.jpg";
import lhp2 from "../assets/lhp2.jpg";
import lhp3 from "../assets/lhp3.jpg";
import lhp4 from "../assets/lhp4.jpg";
import lhp5 from "../assets/lhp5.jpg";
import lhp6 from "../assets/lhp6.jpg";
import lhp7 from "../assets/lhp7.jpg";
import lhp8 from "../assets/lhp8.jpg";

const Card = ({ children, src, reverse }) => {
  const Img = () => (
    <div className="content-image-wrapper">
      <img src={src} alt={src} />
    </div>
  );
  return (
    <div
      className={`${
        reverse ? "boxed-content-grid-alt" : "boxed-content-grid"
      } grid`}
    >
      {reverse ? (
        <>
          <Img />
          <div className="content-split-box">{children}</div>
        </>
      ) : (
        <>
          <div className="content-split-box">{children}</div>
          <Img />
        </>
      )}
    </div>
  );
};
const Banner1 = () => {
  return (
    <div className="hlh-untitled-container background-light">
      <div className="uui-section-layout04">
        <div className="uui-page-padding-8">
          <div className="uui-container-large-7">
            <div className="uui-padding-verticle-xhuge">
              <div className="content-grid _1col">
                <div className="uui-layout04_content">
                  <div className="content-split-box border">
                    <img src={lhp5} alt="" className="image-6" />
                    <p>&zwj;</p>

                    <div className="heading-style-h2 text-green">
                      Our Log Home Packages
                    </div>
                    <p>&zwj;</p>

                    <div className="text-size-regular">
                      Not all log home manufacturers give you the same quality
                      or value. Some might offer packages that look like a great
                      deal upfront but leave you scrambling for missing
                      materials later. From flooring to doors, we provide a
                      comprehensive log home package featuring building products
                      from trusted manufacturers.
                    </div>
                    <div className="select-content-block w-richtxt">
                      <p>&zwj;</p>

                      <div className="heading-style-h3 text-green">
                        Here's what included
                      </div>
                      <p>&zwj;</p>

                      <ul style={{ paddingLeft: "1.5rem" }}>
                        <li>
                          <strong className="text-green">
                            Andersen Windows and Patio Doors
                          </strong>{" "}
                          – The nation’s #1 window manufacturer, known for
                          unmatched quality and performance.
                        </li>
                        <li>
                          <strong className="text-green">
                            Therma-Tru Doors{" "}
                          </strong>
                          – The most trusted and widely used entry doors in the
                          world.
                        </li>
                        <li>
                          <strong className="text-green">
                            Schlage Door Hardware{" "}
                          </strong>
                          – Trusted in over 40 million homes for reliable
                          security and style.
                        </li>
                        <li>
                          <strong className="text-green">
                            Owens Corning Duration Shingles{" "}
                          </strong>{" "}
                          – Featuring SureNail technology for superior
                          protection in any weather.
                        </li>
                        <li>
                          <strong className="text-green">
                            McElroy Metal Roofing{" "}
                          </strong>
                          – Industry-leading metal roofing since 1963.
                        </li>
                        <li>
                          <strong className="text-green">
                            Wood or Metal Railing{" "}
                          </strong>
                          – Choose rustic hand-peeled cedar, square profile,
                          metal, or cable for a contemporary look
                        </li>
                        <li>
                          <strong className="text-green">
                            Proluxe Cetol Log & Siding Exterior Stain{" "}
                          </strong>
                          – Provides a furniture-grade appearance with lasting
                          beauty and low maintenance.
                        </li>
                        <li>
                          <strong className="text-green">
                            Defthane Interior Stain and Finish{" "}
                          </strong>
                          – A durable, low-odor stain and finish that’s easy to
                          apply.
                        </li>
                        <li>
                          <strong className="text-green">
                            Amvic Insulated Concrete Foundation Forms (optional){" "}
                          </strong>
                          – Among the strongest, best-insulated, and driest
                          foundation systems available.
                        </li>
                        <li>
                          <strong className="text-green">
                            Provia Stone for Chimney and Foundation{" "}
                          </strong>
                          – High-quality manufactured stone with a lifetime
                          limited warranty.
                        </li>
                        <li>
                          <strong className="text-green">
                            Stallion Interior Doors{" "}
                          </strong>
                          – Over 400 durable door styles to choose from.
                        </li>
                        <li>
                          <strong className="text-green">
                            Hartco & Bruce Finished Flooring{" "}
                          </strong>
                          – Superior durability for lasting beauty.
                        </li>
                        <li>
                          <strong className="text-green">
                            Additional Inclusions:{" "}
                          </strong>
                          Advantech Subfloor, Exterior Treated Decking, Interior
                          2x4 Wall Framing, choice of wood or drywall ceiling
                          and wall covering, Exterior Cedar Trim, Prefinished
                          Pine Interior Trim, caulking, fasteners, and building
                          accessories.
                        </li>
                      </ul>
                      <p>&zwj;</p>

                      <div className="heading-style-h3 text-green">
                        Items Provided by the Installer
                      </div>
                      <p>&zwj;</p>

                      <div className="text-size-regular">
                        To complement our package, installers provide: the
                        foundation, electrical, plumbing, WHVAC, fireplace
                        insert and flue, cabinetry, and gutters.
                      </div>
                      <p>&zwj;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Banner2 = () => {
  return (
    <div className="hlh-untitled-container more-pad">
      <div className="hlh-content-container closed">
        <div className="hlh-diff-1col-section">
          <div className="wide-cta-grid">
            <div className="wide-cta-content">
              <div className="spacer-small"></div>
              <div className="heading-style-h2 text-green">
                Built for{" "}
                <span className="text-green-accent">Long-Term Value</span>
              </div>
              <div className="text-size-medium">
                Our homes are designed with durability and energy efficiency in
                mind. By focusing on high-quality materials and thoughtful
                design, we help you create a log home that performs well for
                decades.
              </div>
              <div className="spacer-small">
                <div className="flex" style={{ gap: "1rem" }}>
                  <ButtonPrimary
                    varient="green"
                    text={"Find Floor Plans"}
                    to={"/floor-plans"}
                  />
                  <ButtonPrimary
                    varient="grey"
                    text={"See Our Gallery"}
                    to={"/project-gallery"}
                    styles={{
                      borderWidth: "2px",
                      borderColor:
                        "var(--base-color-hochstetler-brand--hlh-green)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="content-image-wrapper">
            <img src={lhp8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Difference = () => {
  return (
    <>
      <div className="hlh-content-container">
        <Header
          backgroundImage={headerBg}
          image={lhp0}
          styles={{ padding: "5rem 1rem" }}
        >
          <Hero2
            heading={{ main: "Log Home Packages", span: "Customized for you" }}
            style={{ padding: "0", marginBottom: "2rem", textAlign: "center" }}
          />
        </Header>
      </div>
      <div className="hlh-content-container">
        <div className="hlh-content">
          <div className="side-padding-condensed">
            <div className="content-wrapper">
              <div className="heading-style-h2 text-green-accent">
                With complete material packages, precision-milled logs, and
                expert guidance,
                <span className="text-dark">
                  we make building your log home smooth, efficient, and free of
                  unexpected costs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hlh-untitled-container">
        <div className="uui-section-layout0">
          <div className="uui-page-padding-8">
            <div className="large-container-content">
              <div className="hlh_content_wrap">
                <Card src={lhp1}>
                  <div className="heading-style-h2 text-green">
                    Dried & Milled For An Airtight Seal
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    Enjoy a more comfortable home with logs that eliminate
                    drafts, improve energy efficiency, and lower your heating
                    and cooling costs.
                    <div className="uui-space-xsmall-3"></div>
                  </div>
                  <div className="text-size-regular">
                    Enjoy a more comfortable home with logs that eliminate
                    drafts, improve energy efficiency, and lower your heating
                    and cooling costs.
                  </div>
                </Card>
                <Card reverse src={lhp2}>
                  <div className="heading-style-h2 text-green">
                    Douglas Fir Post & Beam
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    Experience the strength and beauty of solid timber
                    construction with true post and beam roof structures.
                    <div className="uui-space-xsmall-3"></div>
                  </div>
                  <div className="text-size-regular">
                    Unlike traditional rafters, our heavy timber roof systems
                    are made from Douglas Fir to create a warm, inviting space
                    to call home. We use Dense #1, Free of Heart Center
                    structural timbers for exceptional strength and stability.
                  </div>
                </Card>
                <Card src={lhp3}>
                  <div className="heading-style-h2 text-green">
                    Super Insulated Roof Systems
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    Prevent heat loss that is common with conventional rafters
                    and fiberglass insulation.
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    Our standard nailbase insulation panels, rated R-38, form a
                    continuous barrier of eco-friendly non outgassing
                    polystyrene foam.
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    Keep your home warmer in the winter and cooler in the summer
                    with high-performance insulation that eliminates heat loss
                    and improves energy efficiency.
                  </div>
                </Card>
                <Card reverse src={lhp4}>
                  <div className="heading-style-h2 text-green">
                    Endless Customization
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    Whether you want to customize one of our floorplans or bring
                    your own, we offer flexibility to match your vision.
                    Additionally, you can choose from log species such as
                    Eastern White Pine, White Cedar, or Cypress to suit your
                    aesthetic preferences and site conditions.
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner1 />
      <div className="hlh-untitled-container">
        <div className="uui-section-layout0">
          <div className="uui-page-padding-8">
            <div className="large-container-content">
              <div className="hlh_content_wrap">
                <Card src={lhp6}>
                  <div className="heading-style-h2 text-green">
                    Buy direct{" "}
                    <span className="text-green-accent">from the mill</span>
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    We are confident you'll find, from start to finish, a
                    Hochstetler log home offers one of the highest quality and
                    value combinations in the log home market.
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    Since you are buying directly from the manufacturer you are
                    getting more for your money. Also, you're communicating with
                    the people on the front lines in making sure you get the
                    finest quality material and home design available.
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    Simply put: You can pay more, but you won’t buy better.
                  </div>
                </Card>
                <Card reverse src={lhp7}>
                  <div className="heading-style-h2 text-green">
                    Sustaining Nature for Future Generations
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    We believe in the conservation of our natural resources and
                    utilization of nature's bounty to the fullest.
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    Our mill is dedicated to the restocking of trees, selective
                    harvesting, and sound plantation practices. We carefully
                    plan the cutting and milling of each timber so that the
                    "heartwood" is used for logs and beams and the outer "shell"
                    is used for siding and tongue-and-groove material. Planer
                    shavings are used for livestock bedding.
                  </div>
                  <div className="uui-space-xsmall-3"></div>
                  <div className="text-size-regular">
                    In this way, we are utilizing 100% of each timber - and
                    through our conservation efforts, providing a marketable
                    resource for our children.
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner2 />
    </>
  );
};

export default Difference;
