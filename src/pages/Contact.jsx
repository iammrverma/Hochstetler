import React from "react";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="contact-grid grid-2-1">
      <div className="contact-left-wrapper background-light">
        <div className="heading-style-h2 text-green">Contact</div>
        <div className="heading-style-h4">
          Get straightforward answers direct from log home experts.
        </div>
        <p>
          As an Amish-owned company, we embrace limited technology in line with
          our values. Please allow us one to two business days to receive and
          process online inquiries. If you need to e-mail information to us,
          please call us for our e-mail address.
        </p>
        <div className="contact-list-grid">
          <div className="single-contact">
            <div className="big-green-kicker">Phone</div>
            <div className="spacer-small"></div>
            <div className="heading-style-h3">XXXXXXXXXX</div>
            <p>Toll Free</p>
            <div className="spacer-small"></div>
            <div className="heading-style-h3">XXXXXXXXXX</div>
            <p>Local</p>
          </div>
          <div className="single-contact">
            <div className="big-green-kicker">Fax</div>
            <div className="spacer-small"></div>
            <div className="heading-style-h3">XXXXXXXXXX</div>
          </div>
        </div>
        <div className="spacer-large"></div>
        <div className="heading-style-h2 text-green">Visit Us</div>
        <div className="heading-style-h4">
          Meet with us at our sales office and view our Black Fork model home.
        </div>
        <p>
          To ensure our team can provide you with the best experience, please
          contact us to schedule an appointment.
        </p>
        <div
          className="flex"
          style={{
            alignItems: "baseline",
            color: "var(  --base-color-hochstetler-brand--hlh-red-light)",
            gap: ".5rem",
          }}
        >
          <i class="fa-solid fa-location-dot"></i>
          <a href="https://google.com/maps" target="_blank">
            Mall road street, Vadion mai ghum
          </a>
        </div>
        <div className="contact-list-flex">
          <div className="single-contact">
            <div className="big-green-kicker">Hours</div>
            <div className="spacer-small"></div>
            <div className="heading-style-h3">Monday-Friday</div>
            <div>8:00am – 5:00pm</div>
            <div className="spacer-small"></div>
            <div className="heading-style-h3">Saturday</div>
            <div>9:00am – 2:00pm</div>
            <div>Appointment Preferred</div>
            <div className="spacer-small">
              <div className="heading-style-h4 semi-bold">Sunday</div>
              <div className="spacer-small"></div>
              <div className="heading-style-h4 semi-bold">
                Other hours by appointment
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-large"></div>
        <div className="heading-style-h4">Builder Inquiries</div>
        <p>Call Joseph Hochstetler</p>
        <div className="contact-list-grid">
          <div className="single-contact">
            <div className="big-green-kicker">Phone</div>
            <div className="spacer-small"></div>
            <div className="heading-style-h3">XXXXXXXXXX</div>
            <p>Toll Free</p>
            <div className="spacer-small"></div>
            <div className="heading-style-h3">XXXXXXXXXX</div>
            <p>Local</p>
          </div>
          <div className="single-contact">
            <div className="big-green-kicker">Fax</div>
            <div className="spacer-small"></div>
            <div className="heading-style-h3">XXXXXXXXXX</div>
          </div>
        </div>
      </div>
      <div className="contact-right-wrapper">
        <div className="contact-form-wrapper">
          <Form
            title={"Ask us your log home questions."}
            styles={{ boxShadow: "none", padding: "0", borderRadius: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
